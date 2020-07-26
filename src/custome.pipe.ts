import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'append',
  pure: false
})

export class AppendPipe implements PipeTransform {
  transform(value, appenddata){
    return value+ ' Hari ' + appenddata
  }
}

@Pipe({
  name:'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value, filed, filterValue){
    if( value && value.length > 0){
      return value.filter( x => x[filed] == filterValue)
    }else{
      return [];
    }
  }
}