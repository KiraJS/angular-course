import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ILeftView {
  index: number;
  description: {title: string, subtitle:string, descr1: string, descr2: string, phone: string, imgSrc1: string, imgSrc2: string, temp: number, waterTemp: number, folowers: number, folowing: number}[];
  change(increased):void;
}

@Component({
  selector: 'app-left-view',
  templateUrl: './left-view.component.html',
  styleUrls: ['./left-view.component.css']
})

export class LeftViewComponent implements ILeftView{
  @Input() description;
  @Input() index;

  @Output() onChanged = new EventEmitter<number>();
  change(increased) {
    this.onChanged.emit(increased);
  }
}
