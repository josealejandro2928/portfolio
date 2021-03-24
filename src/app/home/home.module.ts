import { PipesModule } from './../common/shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DirectivesModule } from '../common/shared/directives/directives/directives.module';
import { HelloComponent } from './components/hello/hello.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HelloComponent,
    ResumeComponent,
  ],
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
    MatDividerModule,
    MatTooltipModule
  ],
})
export class HomeModule {}
