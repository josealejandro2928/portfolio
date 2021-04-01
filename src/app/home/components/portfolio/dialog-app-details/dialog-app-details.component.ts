import {
  Component,
  Inject,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IApp } from 'src/app/common/models/app.model';

@Component({
  selector: 'app-dialog-app-details',
  templateUrl: './dialog-app-details.component.html',
  styleUrls: ['./dialog-app-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogAppDetailsComponent implements OnInit, OnDestroy {
  app: IApp;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAppDetailsComponent>
  ) {
    this.dialogRef.disableClose = true;
    this.app = data.app;
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
