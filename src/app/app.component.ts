import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portafolio';
  constructor(
    private swupdate: SwUpdate,
    @Inject(DOCUMENT) private documentRef: Document
  ) {
    // checks if update available
    this.swupdate.available.subscribe((event: any) => {
      // reload / refresh the browser
      this.swupdate
        .activateUpdate()
        .then(() => this.documentRef.location.reload());
    });
  }
}
