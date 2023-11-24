import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  routes: Routes;

  constructor(private rs: Router) {
    this.routes = this.rs.config[0].children || [];
  }
}
