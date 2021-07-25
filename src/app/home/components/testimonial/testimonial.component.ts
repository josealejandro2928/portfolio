import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
} from '@angular/core';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent implements OnInit, AfterViewInit {
  testimonials: any;
  show = true;
  public config: SwiperConfigInterface = {};
  @Input() set _testimonials(value) {
    if (value) {
      this.testimonials = value;
      // console.log(
      //   '🚀 ~ file: testimonial.component.ts ~ line 19 ~ TestimonialComponent ~ @Input ~ this.testimonials',
      //   this.testimonials
      // );
    }
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initConfig();
  }

  initConfig() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      // keyboard: true,
      navigation: {
        nextEl: '.my-swiper-next',
        prevEl: '.my-swiper-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1200,
      // effect: 'fade',
    };
  }
}
