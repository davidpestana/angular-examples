import { CharacterModule as CharacterFeature} from '../../features';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';

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
    CharacterFeature
  ]
})
export class CharacterModule { }
