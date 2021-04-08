import { DialogAppDetailsComponent } from './dialog-app-details/dialog-app-details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IApp } from './../../../common/models/app.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  selectedCategory = 'all';
  allProject: IApp[] = [];
  allCategories: any[] = ['all', 'web sites', 'landing pages', 'mobile apps','robotics'];
  @Input() set _projects(value) {
    this.allProject = value;
  }
  constructor(private cdRef: ChangeDetectorRef, private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.cdRef.markForCheck();
  }

  getProject(category) {
    // console.log("Entre en el render este")
    if (category == 'all') {
      return [...this.allProject];
    }
    return this.allProject.filter((x) => x.category == category);
  }

  onShowDetailsApp(app: IApp) {
    let dialogRef: MatDialogRef<DialogAppDetailsComponent, any>;
    dialogRef = this.dialog.open(DialogAppDetailsComponent, {
      panelClass: 'app-dialog-app-details',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
        app,
      },
    });
  }

  onSelectedCategory(category) {
    this.selectedCategory = category;
  }
}
