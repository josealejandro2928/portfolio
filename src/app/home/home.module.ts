import { PipesModule } from './../common/shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DirectivesModule } from '../common/shared/directives/directives/directives.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, ResumeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatToolbarModule,
    FlexLayoutModule,
    PipesModule,
    MatButtonModule,
    MatIconModule,
    DirectivesModule,
  ],
})
export class HomeModule {}
