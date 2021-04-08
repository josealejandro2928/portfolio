import { NgpLazyLoadModule } from 'ngp-lazy-load';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatDialogModule } from '@angular/material/dialog';
import { GaleryModule } from './../common/shared/galery/galery.module';
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
import { MatMenuModule } from '@angular/material/menu';
import { DirectivesModule } from '../common/shared/directives/directives/directives.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ChooseThemeComponent } from './components/choose-theme/choose-theme.component';
import { DialogAppDetailsComponent } from './components/portfolio/dialog-app-details/dialog-app-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgpEnterSectionModule } from 'ngp-enter-section';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutMeComponent,
    ResumeComponent,
    SkillComponent,
    PortfolioComponent,
    TestimonialComponent,
    ChooseThemeComponent,
    DialogAppDetailsComponent,
    ContactComponent,
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
    MatTooltipModule,
    MatMenuModule,
    GaleryModule,
    MatDialogModule,
    SwiperModule,
    NgpEnterSectionModule,
    NgpLazyLoadModule
  ],
})
export class HomeModule {}
