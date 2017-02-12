import { Component } from '@angular/core';

interface IApp {
  title: string;
  linkSign: string;
  copyRight: string;
  linkUrl: string;
  int: number;
  onChanged(increased: number): void;
  description: {title: string, subtitle:string, descr1: string, descr2: string, phone: string, imgSrc1: string, imgSrc2: string, temp: number, waterTemp: number, folowers: number, folowing: number}[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements IApp{
  public title: string = 'Hot Weather Widget';
  public linkSign: string = "W3layouts";
  public copyRight: string = '© 2015 Hot Weather Widget. All rights reserved | Design by  ';
  public linkUrl: string = 'http://w3layouts.com/';
  public int: number = 0;
  onChanged(increased: number): void{
    this.int = increased;
  }
  public description = [{
    title: "Corinthia Hotel Pragues",
    subtitle: 'Czech Republic',
    descr1: "Sed perspiciatis",
    descr2: "Et harum quidem",
    phone: "Tel:+1285 968 685",
    imgSrc1: '/assets/images/hotel1.jpg',
    imgSrc2: '/assets/images/hotel1-1.jpg',
    temp: 24,
    waterTemp: 22,
    folowers: 5432,
    folowing: 234
  }, {
    title: "Belmond Hotel Caruso",
    subtitle: 'Italy',
    descr1: "Sed perspiciatis",
    descr2: "Et harum quidem",
    phone: "Tel:+1285 968 685",
    imgSrc1: '/assets/images/hotel2.jpg',
    imgSrc2: '/assets/images/hotel2-2.jpg',
    temp: 26,
    waterTemp: 27,
    folowers: 2432,
    folowing: 434
  }, {
    title: "Dafang Hotel",
    subtitle: 'China',
    descr1: "Sed perspiciatis",
    descr2: "Et harum quidem",
    phone: "Tel:+1285 968 685",
    imgSrc1: '/assets/images/hotel3.jpg',
    imgSrc2: '/assets/images/hotel3-3.jpg',
    temp: 20,
    waterTemp: 21,
    folowers: 2561,
    folowing: 123
  }]
}
