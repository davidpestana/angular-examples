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



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    BodyComponent,
    LayoutComponent,
    RoutesFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule  {
  static forRoot(routes: Routes): ModuleWithProviders<LayoutModule> {
    /* LOGICA */
    return {
      ngModule: LayoutModule,
      providers: [
        {provide: LayoutService, useValue: {routes} }
      ]
    };
}

 }
