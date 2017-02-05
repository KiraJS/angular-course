import { Component, Input } from '@angular/core';

interface ITeddy {
  title: string;
  imgSrc: string;
  folowersTitle: string;
  folowingTitle: string;
  index: number;
  description: {title: string, subtitle:string, descr1: string, descr2: string, phone: string, imgSrc1: string, imgSrc2: string, temp: number, waterTemp: number, folowers: number, folowing: number}[];
}

@Component({
  selector: 'app-teddy',
  templateUrl: './teddy.component.html',
  styleUrls: ['./teddy.component.css']
})
export class TeddyComponent implements ITeddy{
  @Input() description;
  @Input() index;
  public title: string = 'Nam libero voluptatem';
  public imgSrc: string = '/assets/images/b1.jpg';
  public folowersTitle: string = 'Folowers';
  public folowingTitle: string = 'Folowing';
}
