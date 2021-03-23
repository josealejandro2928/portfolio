import { ShowToastrService } from './../show-toastr/show-toastr.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilsService } from '../utils/utils.service';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {
  url = '';
  constructor(
    private utilsService: UtilsService,
    private showToastr: ShowToastrService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error del lado del cliente: ${error.error.message}`;
          this.showToastr.showError(errorMessage, 'Error');
        } else {
          errorMessage = error.error;
          this.processingBackendError(error);
        }
        return throwError(error);
      })
    );
  }

  ///////////////////////Procesing Error////////////////////////////////
  processingBackendError(err) {
    this.utilsService.errorHandle(err);
  }
  ///////////////////////////////////////////////////////
}
