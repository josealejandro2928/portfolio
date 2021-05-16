import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent implements OnInit {
  allCertifications: any[] = [];
  showCredential = false;
  selectedCredential = undefined;
  loading = true;
  @Input() set _certifications(value) {
    this.allCertifications = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
