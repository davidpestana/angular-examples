import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { MaterializeService } from '../materialize.service';

@Directive({
  selector: '[collapsible]'
})
export class CollapsibleDirective implements OnInit {
  @HostBinding('class') elementClass = 'collapsible';
  @Input() controller?: HTMLElement;
  open: boolean = false;

  constructor(
    private el: ElementRef,
    private materializeService: MaterializeService,
    private renderer:Renderer2
  ) {
  }

  ngOnInit() {
    let collapsible = this.materializeService.createCollapsible(this.el);
    this.renderer.listen(this.controller, 'click', () => {
      this.open = !this.open;
      this.open ? collapsible.open(0) : collapsible.close(0);
    });
  }

}
