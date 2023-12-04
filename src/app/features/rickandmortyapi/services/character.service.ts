import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, switchMap } from 'rxjs';
import { Character, Characters } from '../types/character';
import { Config, ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private url = "https://rickandmortyapi.com/api/character/?page=";
  private _page = 0;

  // private characters$: Subject<Characters> = new Subject();
  private characters$ = new BehaviorSubject<Characters>([]);  // almacenar estado reactivo
  private virtualPage$ = new BehaviorSubject<string>('0');

  constructor(
    private http:HttpClient, private config: ConfigService
  ) {
    this.page = 1;
  }

  private set page(value:number) {
    this._page = value;
    this.load();
  }

  get page() {
    return this._page;
  }

  next() {
    this.page++;
  }

  get virtualPage(): Observable<string> {
    return this.virtualPage$.asObservable();
  }

  set virtualPage(page:string) {
    this.virtualPage$.next(page);
  }

  get characters(): Observable<Characters> {



    return combineLatest([this.config.config, this.virtualPage])
      .pipe(switchMap(([config, virtualPage]) =>
        this.characters$.asObservable().pipe(
          map(characters => this.applyConfig(characters, config)),
          map(characters => this.applyVirtualPage(characters, virtualPage))
        )
      ))
  }



  // getCharactersWithConfig(config: Observable<Config>):Observable<Characters> {
  //   return config.pipe(switchMap((config) =>
  //     this.characters$.asObservable().pipe(
  //       map(characters => this.applyConfig(characters, config))
  //     )
  // ))
  // }

  get length(): Observable<number> {
    return this.characters.pipe(map(characters => characters.length));
  }

  get total(): Observable<number> {
    return this.characters$.asObservable().pipe(map(characters => characters.length));
  }

  load() {
    this.http.get(this.url+this._page)
      .pipe(map((respose:any) => respose.results))
      .subscribe(characters => this.characters$.next(this.characters$.getValue().concat(characters)));
  }

  create(character:Character) {
    this.characters$.next(this.characters$.getValue().concat([character]));
  }

  applyConfig(characters:Characters, {showLocations, showTen}: Config): Characters {
    characters = showLocations ? characters : characters.map(character => this.removeLocation(character))
    return showTen ? characters : characters.slice(0,10);
  }

  removeLocation(character: Character) {
    return {...character, location: undefined};
  }

  applyVirtualPage(characters:Characters, virutalPage: string): Characters {
    return characters.slice(+virutalPage,10);
  }
}
