import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  pages: string[] = ['1','2','3','4'];
  @Output() pageChange = new EventEmitter<string>();

  pageClick(page:string) {
    this.pageChange.emit(page);
  }

}
