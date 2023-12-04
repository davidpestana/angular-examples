import { Component, Input } from '@angular/core';
import { Character } from 'src/app/features/rickandmortyapi';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() character?:Character;


  ver(algo:any) {
    console.log(algo.collapsible);
  }
}
