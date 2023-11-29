import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { Characters } from './types/character';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  url = "https://rickandmortyapi.com/api/character/?page=";
  _page = 0;

  // private characters$: Subject<Characters> = new Subject();
  private characters$ = new BehaviorSubject<Characters>([]);  // almacenar estado reactivo

  constructor(
    private http:HttpClient,
    private config: ConfigService
  ) {
    this.page = 1;
  }

  set page(value:number) {
    this._page = value;
    this.load();
  }

  get page() {
    return this._page;
  }

  get characters(): Observable<Characters> {
    return this.config.config.pipe(switchMap(({showLocations}) =>
      this.characters$.asObservable().pipe(
        map((characters) => showLocations ? characters : [])
      )
    ))
  }

  get length(): Observable<number> {
    return this.characters.pipe(map(characters => characters.length));
  }


  load() {
    this.http.get(this.url+this._page)
      .pipe(map((respose:any) => respose.results))
      .subscribe(characters => this.characters$.next(characters));
  }

}
