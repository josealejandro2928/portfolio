import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'parseLang',
})
export class ParseLangPipe implements PipeTransform {
  constructor(private traslate: TranslateService) {}

  transform(value: any, lang: string): string {
    if (!value) {
      return '-';
    }
    if (value.constructor == Number || value.constructor == String) {
      return this.traslate.instant(value + '');
    }
    if (value instanceof Object) {
      if (value[lang] && value[lang].length) {
        return value[lang];
      } else if (value['en'] && value['en'].length) {
        return value['en'] || '-';
      } else {
        return value['es'] || '-';
      }
    } else {
      return '-';
    }
  }
}
