import { Routes } from '../layout/types';

export const pages: Routes = [
  {title: "Home", path: "", loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)},
  {title: "Characters", path: "characters", loadChildren: () => import('../pages/character/character.module').then(m => m.CharacterModule)},
  {title: "Chapters", showMenu: false, path: "chapters", loadChildren: () => import('../pages/chapter/chapter.module').then(m => m.ChapterModule)}
];
