import { Route as NativeRoute } from "@angular/router";

export interface Route extends NativeRoute {
  showMenu?: boolean;
}
