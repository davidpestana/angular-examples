import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/features/character/character.service';
import { Characters } from 'src/app/features/character/types/character';
import { MaterializeService } from 'src/app/layout/materialize.service';

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
      this.characterService.page++;
    }

}
