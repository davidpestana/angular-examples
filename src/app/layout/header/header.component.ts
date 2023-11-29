import { Character } from './../../features/character/types/character';
import { Component, ElementRef, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ConfigService } from 'src/app/config.service';
import { CharacterService } from 'src/app/features/character/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() sidenav?: ElementRef<HTMLUListElement>;
  charactersL$: Observable<number>;
  value$: Observable<string>;

  constructor(
    private cs: CharacterService,
    private configService: ConfigService,
  ){
    this.charactersL$ = this.cs.length;
    this.value$ = this.configService.config.pipe(map(({showLocations}) => showLocations ? 'mostrar': 'no-mostrar'));
  }

  change() {
    this.configService.changeLocationsValue();
  }

}
