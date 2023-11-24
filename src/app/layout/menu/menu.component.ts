import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  routes: Routes;

  constructor(private rs: Router) {

    console.log(this.rs.config);

    this.routes = this.rs.config[0].children || [];
  }
}
