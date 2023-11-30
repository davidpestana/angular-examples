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
  total$: Observable<number>;
  value1$: Observable<string>;
  value2$: Observable<string>;

  constructor(
    private cs: CharacterService,
    private configService: ConfigService,
  ){
    this.charactersL$ = this.cs.length;
    this.total$ = this.cs.total;
    
    this.value1$ = this.configService.config.pipe(map(({showLocations}) => showLocations ? 'mostrar location': 'no mostrar location'));
    this.value2$ = this.configService.config.pipe(map(({showTen}) => showTen ? 'mostrar 10': 'mostrar todos'));
  }

  change1() {
    this.configService.changeLocationsValue();
  }
  change2() {
    this.configService.changeShowTen();
  }

}
