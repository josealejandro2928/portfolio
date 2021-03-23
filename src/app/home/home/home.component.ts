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
  resume: any;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getNavigation().subscribe((data) => {
      this.navigation = data;
    });
    this.homeService.getResume().subscribe((data) => {
      this.resume = data;
    });
  }
}
