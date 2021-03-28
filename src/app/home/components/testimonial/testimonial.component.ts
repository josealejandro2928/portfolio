import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
