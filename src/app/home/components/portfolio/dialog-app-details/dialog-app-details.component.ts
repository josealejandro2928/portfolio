import {
  Component,
  Inject,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { IApp } from 'src/app/common/models/app.model';

@Component({
  selector: 'app-dialog-app-details',
  templateUrl: './dialog-app-details.component.html',
  styleUrls: ['./dialog-app-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogAppDetailsComponent implements OnInit, OnDestroy {
  app: IApp;
  lang = 'en';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translate: TranslateService,
    public dialogRef: MatDialogRef<DialogAppDetailsComponent>
  ) {
    this.dialogRef.disableClose = true;
    this.app = data.app;
  }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }
  ngOnDestroy(): void {}
}
