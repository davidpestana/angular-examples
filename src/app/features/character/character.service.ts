import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Characters } from './types/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  get characters(): Observable<Characters> {
    return this.load();
  }

  get length(): Observable<number> {
    return this.characters.pipe(map(characters => characters.length));
  }


  load() {
    return this.http.get('https://rickandmortyapi.com/api/character/').pipe(map((respose:any) => respose.results));
  }

}
