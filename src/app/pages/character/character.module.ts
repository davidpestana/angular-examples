import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: CharacterComponent}
]

@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CharacterModule { }
