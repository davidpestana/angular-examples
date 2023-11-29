import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Config {
  showLocations: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  _config: BehaviorSubject<Config> = new BehaviorSubject<Config>({
    showLocations: true
  })

  constructor() { }

  get config():Observable<Config> {
    return this._config.asObservable();
  }

  changeLocationsValue() {
    let value = this._config.getValue();
    this._config.next({...value, showLocations: !value.showLocations});
  }

}
