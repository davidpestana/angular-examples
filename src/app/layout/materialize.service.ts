import { ElementRef, Injectable } from '@angular/core';
import * as M from "materialize-css";


@Injectable({
  providedIn: 'root'
})
export class MaterializeService {

  materializeSidenav!: M.Sidenav;
  constructor() { }

  public set sidenav(sidenav: ElementRef<HTMLUListElement>) {
    this.materializeSidenav = M.Sidenav.init(sidenav.nativeElement,{});
  }
}
