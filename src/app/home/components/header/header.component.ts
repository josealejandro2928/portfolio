import { INavigation } from './../../../common/models/navigation.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  navigation: INavigation[] = [];

  @Input() set _navigation(value) {
    if (value) {
      this.navigation = value;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
