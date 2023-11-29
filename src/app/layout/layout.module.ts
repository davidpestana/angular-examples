import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { RoutesFilterPipe } from './pipes/routes-filter.pipe';
import { Routes } from './types';
import { LayoutService } from './layout.service';
import { MenuDirective } from './directives/menu.directive';
import { SidenavDirective } from './directives/sidenav.directive';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    BodyComponent,
    LayoutComponent,
    RoutesFilterPipe,
    MenuDirective,
    SidenavDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    MenuDirective
  ],
})
export class LayoutModule {
  static forRoot(routes: Routes): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        {provide: LayoutService, useValue: {routes} }
      ]
    };
}

 }
