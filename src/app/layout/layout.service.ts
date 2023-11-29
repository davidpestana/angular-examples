import { Injectable, Optional } from '@angular/core';
import { Routes } from './types';

class LayoutServiceConfig {
  routes: Routes = [];
}

@Injectable()
export class LayoutService {

  routes: Routes;


  constructor(@Optional() {routes}: LayoutServiceConfig) {
    this.routes = routes;
  }

}
