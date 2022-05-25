import { DomSanitizer } from '@angular/platform-browser';
import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnDestroy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogGaleryZoomComponent } from '../dialog-galery-zoom/dialog-galery-zoom.component';
import { IFile } from 'src/app/common/models/file.model';

@Component({
  selector: 'app-galery-files',
  templateUrl: './galery-files.component.html',
  styleUrls: ['./galery-files.component.scss'],
})
export class GaleryFilesComponent implements OnInit, AfterViewInit, OnDestroy {
  config: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: true,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,

    speed: 500,
    effect: 'slide',
  };

  files: IFile[] = [];
  apiUrl = environment.imageUrl;
  showZoom = false;
  selectedFile = undefined;
  observeVideos: any[] = [];
  show = true;

  @ViewChild('gallery', { static: false }) gallery?: SwiperDirective;

  @Input() set _files(value) {
    if (value) {
      this.files = [...value];
      if (this.gallery) {
        this.gallery.init();
        this.gallery.update();
        this.gallery.setIndex(0);
      }
    }
  }

  @Input() _count: number;
  @Output() slidesChange$ = new EventEmitter();

  constructor(
    public sanitazer: DomSanitizer,
    private elRef: ElementRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSwipper();
    let t = setTimeout(() => {
      this.processingVideo();
      clearTimeout(t);
    }, 750);
  }

  onPlayVideo(file: IFile) {
    // console.log('GaleryFilesComponent -> onPlayVideo -> file', file);
    let element = this.elRef.nativeElement.querySelector(
      '#video-' + file.id
    ) as HTMLVideoElement;
    element.play();
    let data = this.elRef.nativeElement.querySelector('#overlay-' + file.id);
    data.style.display = 'none';
    element.controls = true;
  }

  onPauseVideo(file: IFile) {
    let data = this.elRef.nativeElement.querySelector('#overlay-' + file.id);
    if (data) {
      data.style.display = 'flex';
    }
    let element = this.elRef.nativeElement.querySelector(
      '#video-' + file.id
    ) as HTMLVideoElement;
    if (element) {
      element.controls = false;
      element.pause();
    }
  }

  openZoomViewer(file, event) {
    event.stopPropagation();
    this.onPauseVideo(file);
    this.selectedFile = file;
    let dialogRef: MatDialogRef<DialogGaleryZoomComponent, any>;
    dialogRef = this.dialog.open(DialogGaleryZoomComponent, {
      panelClass: 'app-dialog-galery-zoom',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
        files: this.files,
      },
    });
  }

  processingVideo() {
    let elementVideos = this.elRef.nativeElement.querySelectorAll(
      '.videoContainer, .videoMedia'
    );
    // console.log(elementVideos);
    elementVideos.forEach((video: any) => {
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log('aqui', entry.intersectionRatio);
            // console.log('GaleryFilesComponent -> processingVideo -> entry', entry);
            if (entry.target.tagName == 'VIDEO') {
              if (entry.intersectionRatio != 1 && !video.paused) {
                let videoEl = entry.target as HTMLVideoElement;
                videoEl.pause();
              }
            }
            if (entry.target.tagName == 'IFRAME') {
              if (entry.intersectionRatio != 1 && !video.paused) {
                let iframe = entry.target as HTMLIFrameElement;
                iframe?.contentWindow?.postMessage(
                  '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
                  '*'
                );
              }
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(video);
      this.observeVideos.push({ o: observer, t: video });
    });
  }

  ngOnDestroy(): void {
    this.unobserveAllVideos();
  }

  initSwipper() {
    const imagesSwiper = this.gallery.swiper();
    imagesSwiper.init();
    imagesSwiper.update();
  }

  unobserveAllVideos() {
    /*Unobserve all Intersection Observer of videos*/
    this.observeVideos.forEach((x) => {
      x?.o.unobserve(x.t);
    });
  }

  onIframeLoaded(event) {
    this.unobserveAllVideos();
    this.processingVideo();
  }

  onVideoLoaded(event) {
    // console.log('🚀 ~ file: galery-files.component.ts ~ line 151 ~ GaleryFilesComponent ~ onVideoLoaded ~ event', event);
  }
}
