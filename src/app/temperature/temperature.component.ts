import { Component, Input } from '@angular/core';

type descriptionType = {title: string, subtitle: string, descr1: string, descr2: string,
    phone: string, imgSrc1: string, imgSrc2: string, temp: number, waterTemp: number,
    folowers: number, folowing: number}[];

interface ITemperature {
  title: string;
  temp: number;
  waterTemp: number;
  int: number;
  description: descriptionType;
}

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements ITemperature {
 @Input() public description: descriptionType;
 @Input() public int: number;
 public title: string = 'Et harum quidem';
 public temp: number = 14;
 public waterTemp: number = 20;
}
