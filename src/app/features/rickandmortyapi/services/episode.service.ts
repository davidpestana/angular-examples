import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, debounceTime, filter, map, of, race, switchMap, tap } from 'rxjs';
import { Episode, Episodes } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private url = "https://rickandmortyapi.com/api/episode/";

  _episode = new BehaviorSubject<Episode|null>(null);
  _episodes = new BehaviorSubject<Episodes>([]);

  constructor(
    private http: HttpClient
  ) { }

  get episodes(): Observable<Episodes>{
    return this._episodes.asObservable();
  }

  get episode(): Observable<Episode> {
    return this._episode.asObservable()
      .pipe(filter(Boolean));
  }


  find(id: string): Observable<Episode> {
    return race([
      this.search(id),
      this.get(id).pipe(debounceTime(100))]
    );
  }

  search(id:string): Observable<Episode> {
    const finder = (episode: Episode) => episode.id === id;
    return this.episodes.pipe(
      map<Episodes, Episode|undefined>((episodes: Episodes) => episodes.find(finder)),
      filter(Boolean),
    )
  }

  get(id:string): Observable<Episode> {
    this.http.get(this.url + id).pipe(
      map((data: any) => data)
    )
    .pipe(
      tap((data: Episode) => this._episode.next(data)),
      tap((data: Episode) => this._episodes.next(this._episodes.getValue().concat([data])))
    )
    .subscribe()
    return this.episode;
  }
}
