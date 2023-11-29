import { Directive, ElementRef, HostBinding } from '@angular/core';
import { MaterializeService } from '../materialize.service';

@Directive({
  selector: '[sidenav]'
})
export class SidenavDirective {
  @HostBinding('class') elementClass = 'sidenav';

  constructor(private el: ElementRef, private ms:MaterializeService) {
    this.ms.sidenav = this.el;
  }

}
