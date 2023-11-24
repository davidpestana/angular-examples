import { Pipe, PipeTransform } from '@angular/core';
import { Route, Routes } from '../types';

@Pipe({
  name: 'routesFilter'
})
export class RoutesFilterPipe implements PipeTransform {

  transform(routes: Routes): Routes {
    return routes.filter((route: Route) => route.showMenu !== false);
  }

}
