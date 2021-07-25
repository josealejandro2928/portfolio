import { ChangeDetectorRef, ElementRef } from '@angular/core';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements OnInit, AfterViewInit {
  skill: any;
  elRef: HTMLElement;
  originalValue = 0;

  @Input() set _skill(value) {
    if (value) {
      this.skill = value;
    }
  }

  constructor(private _elRef: ElementRef, private cf: ChangeDetectorRef) {
    this.elRef = this._elRef.nativeElement;
  }

  ngOnInit(): void {
    this.originalValue = this.skill.value;
    this.skill.value = 0;
  }

  ngAfterViewInit(): void {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    let _observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          this.skill.value = this.originalValue;
          this.cf.markForCheck();
        }
      });
    }, options);
    _observer.observe(this.elRef);
  }
}
