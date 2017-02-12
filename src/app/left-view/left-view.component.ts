import { Component, EventEmitter, Input, Output } from '@angular/core';

type descriptionType = {title: string, subtitle: string, descr1: string, descr2: string,
  phone: string, imgSrc1: string, imgSrc2: string, temp: number, waterTemp: number,
  folowers: number, folowing: number}[];

interface ILeftView {
  int: number;
  description: descriptionType;
  change(increased: number): void;
  Changefilter(filterName: string): void;
}

@Component({
  selector: 'app-left-view',
  templateUrl: './left-view.component.html',
  styleUrls: ['./left-view.component.css']
})

export class LeftViewComponent implements ILeftView {
  @Input() public description: descriptionType;
  @Input() public int: number;
  @Input() public filter: string;

  @Output() onChanged = new EventEmitter<number>();
  public change(increased: number): void {
    this.onChanged.emit(increased);
  }
  @Output() onClick = new EventEmitter<string>();
  public Changefilter(name: string): void {
    this.onClick.emit(name);
  }
}
