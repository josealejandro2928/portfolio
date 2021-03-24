import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
