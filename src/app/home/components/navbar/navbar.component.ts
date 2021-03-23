import { INavigation } from './../../../common/models/navigation.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
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

  @Input() set _navigation(value) {
    if (value) {
      this.navigation = value;
    }
  }
  elRef: HTMLElement;

  constructor(private _elRef: ElementRef) {
    this.elRef = this._elRef.nativeElement;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.navBarItems = this.elRef.querySelectorAll('.navItem');
  }
}
