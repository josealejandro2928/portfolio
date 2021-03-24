import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit {
  hello: any;
  @Input() set _hello(value) {
    if (value) {
      this.hello = value;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
