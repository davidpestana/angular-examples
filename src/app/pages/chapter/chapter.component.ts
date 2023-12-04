import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Episode, EpisodeService } from 'src/app/features/rickandmortyapi';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {

    episode$:Observable<Episode>;

    constructor(
      private router: ActivatedRoute,
      public episodeService: EpisodeService
    ) {
      this.episode$ = this.router.params.pipe(
          map(({episodeId}) => episodeId),
          switchMap(episodeId => this.episodeService.find(episodeId))
      );
    }
}
