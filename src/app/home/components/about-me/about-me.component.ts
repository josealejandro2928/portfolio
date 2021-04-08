import { TranslateService } from '@ngx-translate/core';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements OnInit {
  about: any;
  @Input() set _about(value) {
    if (value) {
      this.about = value;
    }
  }
  lang = 'en';
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }
}
