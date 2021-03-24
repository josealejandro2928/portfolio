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

  @Input() set _navigation(value) {
    if (value) {
      this.navigation = value;
      if (this.navigation.length) {
        this.navigation[0].active = true;
      }
    }
  }
  elRef: HTMLElement;
  darkModeActivated = false;
  constructor(private _elRef: ElementRef, private chRef: ChangeDetectorRef) {
    this.elRef = this._elRef.nativeElement;
    this.darkModeActivated =
      localStorage.getItem('darkModeActivated') == 'true';
  }

  ngOnInit(): void {
    this.chooseTheme();
    const navbar: any = this.elRef.querySelector('.navbar');
    window.addEventListener('scroll', () => {
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
        const top = section.getBoundingClientRect().top;
        const bodyHeigt = document.body.offsetHeight;
        if (bodyHeigt / 2 > top - 150 && top >= 0) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
    }
  }

  themeToogle() {
    this.darkModeActivated = !this.darkModeActivated;
    localStorage.setItem(
      'darkModeActivated',
      this.darkModeActivated ? 'true' : 'false'
    );
    this.chooseTheme();
  }
  chooseTheme() {
    if (this.darkModeActivated) {
      document.body.className = 'mat-typography darkThemeClass';
    } else {
      document.body.className = 'mat-typography lightThemeClass';
    }
  }
  onToogleMenu() {
    this.menu.nativeElement.classList.toggle('active');
    // console.log("🚀 ~ file: navbar.component.ts ~ line 90 ~ NavbarComponent ~ onToogleMenu ~ this.menu.nativeElement", this.menu.nativeElement)
  }
}
