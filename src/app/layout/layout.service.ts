import { Inject, Injectable, Optional } from '@angular/core';
import { Routes } from './types';
import { Route } from '@angular/router';

class LayoutServiceConfig {
  routes: Routes = [];
}

@Injectable()
export class LayoutService {

  routes: Routes;
  constructor(@Optional() {routes}: LayoutServiceConfig) {
    this.routes = routes;
  }

  // get routes(): Routes {
  //   return this._routes;
  // }

  // set routes(value: Routes) {
  //   this._routes = value;
  // }

}
