import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ChapterModule } from './pages/chapter/chapter.module';
import { Routes } from './layout/types';


// const routes: Routes = misRutas.map(
//   (r) => ({path: r.path, loadChildren: () =>  import(r.modulePath).then(m => m[r.module])})
// );

const pages: Routes = [
  {title: "Home", path: "", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {title: "Characters", path: "characters", loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)},
  {title: "Chapters", showMenu: false, path: "chapters", loadChildren: () => import('./pages/chapter/chapter.module').then(m => m.ChapterModule)}
];

const routes: Routes = [
  {path: "", component: LayoutComponent, children: pages},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
