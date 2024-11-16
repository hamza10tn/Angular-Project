import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLettreUpper'
})
export class FirstLettreUpperPipe implements PipeTransform {

  transform(chaine:String) {
    return chaine[0].toUpperCase()+chaine.substring(1,chaine.length);
  }

}
