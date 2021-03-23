import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ShowToastrService } from './../show-toastr/show-toastr.service';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  urlImage = environment.apiUrl;
  showErrorState = false;

  constructor(
    public sanitizer: DomSanitizer,
    private showToastr: ShowToastrService,
    private translateService: TranslateService,
    private httpClient: HttpClient
  ) {}

  errorHandle(error, nomenclator?, action?) {
    if (this.showErrorState) {
      return;
    }
    this.showErrorState = true;

    const alternative = nomenclator
      ? action
        ? this.translateService.instant('Error ') + action + ' ' + nomenclator
        : this.translateService.instant('Error ') + action
      : this.translateService.instant(
          `Server response failed, check your connection to the network, or contact the administrators`
        );
    let msg = alternative;
    if (error.errors && error.errors.length) {
      msg = error.errors.map(
        (item) => (item.field || '') + ' ' + (item.title || item.message + ' ')
      );
    } else if (error.error.errors) {
      msg = error.error.errors.map(
        (item) => (item.field || '') + ' ' + (item.title || item.message + ' ')
      );
    } else if (error.error && error.error.length) {
      msg = error.error.map(
        (item) => (item.field || '') + ' ' + (item.title || item.message + ' ')
      );
    } else {
      msg = error.error.message;
    }
    this.showToastr
      .showError(msg, 'Error', 5000)
      .toastRef.afterClosed()
      .subscribe((data) => {
        this.showErrorState = false;
      });
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(this.urlImage, { responseType: 'blob' });
  }

  parserLanguage(item, language) {
    if (!item) {
      return '-';
    }
    if (item[language] && item[language].length) {
      return item[language];
    } else if (item.en && item.en.length) {
      return item.en;
    } else {
      return item.es;
    }
  }

  public isObjectEquals(x, y): boolean {
    if (x === y) {
      return true;
    }

    if (!(x instanceof Object) || !(y instanceof Object)) {
      return false;
    }

    if (x.constructor !== y.constructor) {
      return false;
    }

    for (const p in x) {
      if (!x.hasOwnProperty(p)) {
        continue;
      }

      if (!y.hasOwnProperty(p)) {
        return false;
      }

      if (x[p] === y[p]) {
        continue;
      }

      if (typeof x[p] !== 'object') {
        return false;
      }

      if (!this.isObjectEquals(x[p], y[p])) {
        return false;
      }
    }
    for (const p in y) {
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  }
}
