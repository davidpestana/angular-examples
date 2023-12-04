import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService, Characters } from 'src/app/features/rickandmortyapi';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
    characters$: Observable<Characters>;

    constructor(private characterService: CharacterService){
      this.characters$ = this.characterService.characters;
    }

    next() {
      this.characterService.next();
    }

    pageChange(page: string) {
      this.characterService.virtualPage = page;
    }

    create() {
      this.characterService.create({
        id: '111111',
        name: 'david',
        image: 'canarias',
      })
    }

}
