import { Directive, HostBinding, HostListener } from '@angular/core';
import { MaterializeService } from '../materialize.service';


@Directive({
  selector: '[menu]'
})
export class MenuDirective {

  @HostBinding('style.cursor') cursor: string = 'pointer';

  materializeSidenav?: M.Sidenav;

  constructor(private ms:MaterializeService) {
  }

  @HostListener('click') click() {
    this.ms.materializeSidenav?.open();
  }

}
