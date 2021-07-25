import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { environment } from 'src/environments/environment';
import { Component, Inject, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dialog-galery-zoom',
  templateUrl: './dialog-galery-zoom.component.html',
  styleUrls: ['./dialog-galery-zoom.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogGaleryZoomComponent implements OnInit, OnDestroy, AfterViewInit {
  imageUrl: any;
  language: any;
  _unsubscribeAll: Subject<any>;
  observeVideos: any[] = [];
  configGallery: SwiperConfigInterface = {
    loop: false,
    slidesPerView: 1,
    grabCursor: true,
    keyboard: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  apiUrl = environment.imageUrl;
  files = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogGaleryZoomComponent>,
    public utilsService: UtilsService,
    @Inject(DOCUMENT) private documentRef: Document,
  ) {
    this.dialogRef.disableClose = true;
    this._unsubscribeAll = new Subject<any>();
    this.imageUrl = environment.imageUrl;
    this.files = data.files;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.processingVideo();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    /*Unobserve all Intersection Observer of videos*/
    this.observeVideos.forEach((x) => {
      x?.o.unobserve(x.t);
    });
  }

  processingVideo() {
    let elementVideos = this.documentRef.querySelectorAll('.videoNormal, .videoIFrame');
    elementVideos.forEach((video: any) => {
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log('aqui', entry.intersectionRatio);
            if (entry.target.tagName == 'VIDEO') {
              if (entry.intersectionRatio != 1 && !video.paused) {
                video.pause();
              }
            }
            if (entry.target.tagName == 'IFRAME') {
              if (entry.intersectionRatio != 1 && !video.paused) {
                video.src = video.src;
              }
            }
          });
        },
        { threshold: 1 },
      );
      observer.observe(video);

      this.observeVideos.push({ o: observer, t: video });
    });
  }

  //////////////////////////////////////////
}
