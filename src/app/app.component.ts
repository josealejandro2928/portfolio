import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  public allLangObjects = [
    {
      name: 'Inglés',
      image: 'assets/images/flags/en.svg',
      lang: 'en',
      abbreviation: 'eng',
    },
    {
      name: 'Español',
      image: 'assets/images/flags/es.svg',
      lang: 'es',
      abbreviation: 'esp',
    },
  ];

  constructor(
    private swupdate: SwUpdate,
    private translate: TranslateService,
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

  ngOnInit() {
    this.initLang();
  }

  initLang = () => {
    let browserLanguage = this.translate.getBrowserLang();
    browserLanguage = ['es', 'en'].includes(browserLanguage)
      ? browserLanguage
      : 'en';
    console.log(browserLanguage);
    let storedLang = 'en';
    try {
      let tempLangObject = JSON.parse(localStorage.getItem('language'));
      storedLang = tempLangObject.lang;
    } catch (e) {
      storedLang = browserLanguage || 'en';
    }
    let lang = storedLang || browserLanguage || 'en';
    let selectedLanguage = this.allLangObjects.find((x) => x.lang == lang);
    localStorage.setItem('language', JSON.stringify(selectedLanguage));
  };
}
