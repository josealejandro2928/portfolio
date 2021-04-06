import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  about: any;
  @Input() set _about(value) {
    if (value) {
      this.about = value;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
