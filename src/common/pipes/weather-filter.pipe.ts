import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherFilter'
})
export class WeatherFilterPipe implements PipeTransform {

  public transform(input: any[], searchTerm: string): any {
    if (!searchTerm) {
      return input;
    }
    if(searchTerm === "temp"){
      let newInput = input.sort(function(obj1, obj2){
        return obj2.temp - obj1.temp;
      });
      return newInput
    }
    if(searchTerm === "folowers"){
      let newInput = input.sort(function(obj1, obj2){
        return obj2.folowers - obj1.folowers;
      });
      return newInput
    }
    if(searchTerm === "folowing"){
      let newInput = input.sort(function(obj1, obj2){
        return obj2.folowing - obj1.folowing;
      });
      return newInput
    }

  }
}