import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterComponent } from './chapter.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:":episodeId", component: ChapterComponent},
  {path:"", redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    ChapterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChapterModule { }
