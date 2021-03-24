import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[writeLetter]',
})
export class WriteLetterDirective implements AfterViewInit, OnDestroy {
  elRef: HTMLElement;
  _observer: IntersectionObserver;
  text = '';
  @Input() time = 150;
  @Input() delay = 0;
  constructor(private _elRef: ElementRef) {
    this.elRef = this._elRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.text = this.elRef.innerText;
    this.elRef.innerHTML = `<span>${this.text.substring(0, 1)}</span>`;
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.showLetters();
          observer.unobserve(entry.target);
        }
      });
    }, options);
    this._observer.observe(this.elRef);
  }

  ngOnDestroy(): void {
    this._observer.unobserve(this.elRef);
  }

  showLetters = () => {
    let i = 1;

    let x = setTimeout(() => {
      const c = setInterval(() => {
        if (i == this.text.length) {
          clearInterval(c);
          return;
        }
        const span = document.createElement('span');
        span.innerText = this.text[i++];
        this.elRef.appendChild(span);
      }, this.time);
      clearTimeout(x);
    }, this.delay);
  };
}
