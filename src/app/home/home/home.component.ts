import { HomeService } from './../services/home.service';
import { INavigation } from './../../common/models/navigation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navigation: INavigation[] = [];
  about: any;
  resume: any;
  portfolio: any;

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    const [nav, about, res, projects] = await Promise.all([
      this.homeService.getSource('navigation.js'),
      this.homeService.getSource('about-me.js'),
      this.homeService.getSource('resume.js'),
      this.homeService.getSource('portfolio.js'),
    ]);
    this.navigation = nav;
    this.about = about;
    this.resume = res;
    this.portfolio = projects;
  }
}
