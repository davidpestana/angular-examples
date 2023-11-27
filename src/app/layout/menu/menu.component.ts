import { LayoutService } from './../layout.service';
import { Component } from '@angular/core';
import { Routes } from '../types';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  routes: Routes;

  constructor(private layoutService: LayoutService) {
    this.routes = this.layoutService.routes;
  }
}
