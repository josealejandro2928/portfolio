import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryFilesComponent } from './galery-files/galery-files.component';
import { PipesModule } from '../pipes/pipes.module';
import { NgpLazyLoadModule } from 'ngp-lazy-load';
import { DialogGaleryZoomComponent } from './dialog-galery-zoom/dialog-galery-zoom.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [GaleryFilesComponent, DialogGaleryZoomComponent],
  imports: [
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    PipesModule,
    TranslateModule,
    MatTooltipModule,
    NgpLazyLoadModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [GaleryFilesComponent],
})
export class GaleryModule {}
