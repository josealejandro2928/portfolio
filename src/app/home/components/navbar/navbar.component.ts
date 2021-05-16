import { INavigation } from './../../../common/models/navigation.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, AfterViewInit {
  navigation: INavigation[] = [];
  navBarItems: any;
  @ViewChild('menu', { static: false }) menu: ElementRef;
  public flags = [
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
    // {
    //   name: 'Francés',
    //   image: 'assets/images/flags/fr.svg',
    //   lang: 'fr',
    //   abbreviation: 'fra',
    // },
  ];
  flag: any = undefined;
  _unsubscribeAll = new Subject();
  lang = 'es';

  @Input() set _navigation(value) {
    if (value) {
      this.navigation = value;
      if (this.navigation.length) {
        this.navigation[0].active = true;
      }
    }
  }
  elRef: HTMLElement;

  constructor(
    private _elRef: ElementRef,
    private chRef: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    this.elRef = this._elRef.nativeElement;
  }

  ngOnInit(): void {
    this.initSystem();
    const navbar: any = this.elRef.querySelector('.navbar');
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 25) {
        navbar.classList.add('active');
      } else {
        navbar.classList.remove('active');
      }
      this.checkNavItems();
      this.chRef.markForCheck();
    });
  }

  ngAfterViewInit(): void {
    this.navBarItems = this.elRef.querySelectorAll('.navItem');
  }

  checkNavItems() {
    for (const item of this.navigation) {
      const section = document.getElementById(item.sectionId);
      if (section) {
        const { top, height } = section.getBoundingClientRect();
        const bodyHeigt = document.body.offsetHeight;
        if (Math.abs(top) - 150 < bodyHeigt) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
    }
  }
  onToogleMenu() {
    this.menu.nativeElement.classList.toggle('active');
  }

  initSystem() {
    const defaultLanguage: any = this.flags[0];
    if ('language' in localStorage) {
      let language = JSON.parse(localStorage.getItem('language'));
      language = language ? language : defaultLanguage;
      this.translate.setDefaultLang(language.lang);
      this.translate.use(language.lang);
      this.flag = language;
      this.lang = language.lang;
    } else {
      localStorage.setItem('language', JSON.stringify(defaultLanguage));
      this.translate.setDefaultLang(defaultLanguage.lang);
      this.flag = defaultLanguage;
      this.lang = defaultLanguage.lang;
    }
  }
  public changeLang(flag) {
    this.translate.use(flag.lang);
    localStorage.setItem('language', JSON.stringify(flag));
    this.flag = flag;
    document.location.reload();
  }
}
