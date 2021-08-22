import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value:any): unknown {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)
    const Seconds = 86400;

    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/Seconds;

    if(dateCounter >=1 && value>todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
