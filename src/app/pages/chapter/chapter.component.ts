import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {

    chapterId$: Observable<string>;

    constructor(private router: ActivatedRoute) {
       this.chapterId$ = this.router.params.pipe(map(({chapterId}) => chapterId));
    }
}
