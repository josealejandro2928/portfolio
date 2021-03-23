import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, ResumeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
})
export class HomeModule {}
