import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {
  resume: any;
  @Input() set _resume(value) {
    if (value) {
      this.resume = value;
      this.resume.skills = this.resume?.skills.sort((a,b)=>b.value-a.value);
    }
  }
  lang = 'en';
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }
}
