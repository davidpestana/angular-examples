import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeNumber'
})
export class EpisodeNumberPipe implements PipeTransform {
  transform(urls: string[] | undefined): number[] {
    return urls ? urls.map((url) =>+(url.split('/').pop() || '0')) : [];
  }
}
