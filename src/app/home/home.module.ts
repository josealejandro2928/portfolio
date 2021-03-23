import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ResumeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
})
export class HomeModule {}
