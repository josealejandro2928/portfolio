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
  hello: any;
  resume: any;

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    const [nav, hi, res] = await Promise.all([
      this.homeService.getNavigation().toPromise(),
      this.homeService.getHello().toPromise(),
      this.homeService.getResume().toPromise(),
    ]);
    this.navigation = nav;
    this.hello = hi;
    this.resume = res;
  }
}
