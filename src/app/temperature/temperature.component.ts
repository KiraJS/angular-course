import { Component, Input } from '@angular/core';

interface ITemperature {
  title: string;
  temp: number;
  waterTemp: number;
  index: number;
  description: {title: string, subtitle:string, descr1: string, descr2: string, phone: string, imgSrc1: string, imgSrc2: string, temp: number, waterTemp: number, folowers: number, folowing: number}[];
}

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements ITemperature{
 @Input() description;
 @Input() index: number;
 public title: string = 'Et harum quidem';
 public temp: number = 14;
 public waterTemp: number = 20;
}
