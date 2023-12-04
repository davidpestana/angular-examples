import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { EpisodeNumberPipe } from './pipes/episode-number.pipe';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: "", component: CharacterComponent}
]

@NgModule({
  declarations: [
    CharacterComponent,
    PaginatorComponent,
    CharacterCardComponent,
    EpisodeNumberPipe,
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule
  ]
})
export class CharacterModule { }
