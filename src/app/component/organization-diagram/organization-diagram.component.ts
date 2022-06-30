// @ts-nocheck
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../service/data-service.service';
@Component({
  selector: 'app-organization-diagram',
  templateUrl: './organization-diagram.component.html',
  styleUrls: ['./organization-diagram.component.scss'],
})
export class OrganizationDiagramComponent implements OnInit {
  @ViewChild('draggable', { read: ElementRef }) draggable: ElementRef;
  @ViewChild('wrapper', { read: ElementRef }) wrapper: ElementRef;
  @ViewChild('input', { read: ElementRef }) input: ElementRef;
  @ViewChild('container', { read: ElementRef }) container: ElementRef;

  @Input() organizationData: any;
  constructor(private data: DataService) {}
  isMoving = false;
  startX = 0;
  startY = 0;
  zoomPercent = 50;
  xPercent = 50;
  element: any;
  ngOnInit() {}

  ngAfterViewInit() {
    this.data.currentMessage.subscribe(() => {
      // this.element.style.transformOrigin = 'center';
      // setTimeout(() => {
      //   this.element.style.transformOrigin = '50% 0';
      // }, 0);
    });

    this.element = this.draggable.nativeElement;
    this.recenter();
    // Sự kiện di chuột khắp màn hình
    document.addEventListener('mousemove', (e) => {
      if (this.isMoving) {
        this.element.style.cursor = 'all-scroll';
        this.clearSelection();
        // Scale
        // this.element.style.left = e.clientX - this.startX + 'px';
        // this.element.style.right = 'unset';
        // this.element.style.top = e.clientY - this.startY + 'px';
        // this.element.style.bottom = 'unset';
        // Zoom
        this.element.style.left =
          ((e.clientX - this.startX) * 100) / (this.zoomPercent * 2) + 'px';
        this.element.style.right = 'unset';
        this.element.style.top =
          ((e.clientY - this.startY) * 100) / (this.zoomPercent * 2) + 'px';
        this.element.style.bottom = 'unset';
      }
    });
    // Sự kiện nhấc chuột lên
    document.addEventListener('mouseup', (e) => {
      if (this.isMoving) {
        this.isMoving = false;
        this.element.style.cursor = 'unset';
      }
    });
  }

  detectBrowser() {
    // Opera 8.0+
    var isOpera =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      })(
        !window['safari'] ||
          (typeof safari !== 'undefined' && window['safari'].pushNotification)
      );

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    var isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    return {
      isOpera,
      isFirefox,
      isSafari,
      isIE,
      isEdge,
      isChrome,
      isEdgeChromium,
      isBlink,
    };
  }
  /**
   * Sự kiện ấn chuột xuống
   * createdby ntdung5 13.06.2022
   */
  mousedown(e) {
    this.isMoving = true;

    // Scale
    // if (this.detectBrowser().isFirefox) {
    // this.startY = e.clientY - parseInt(getComputedStyle(this.element).top);
    // this.startX = e.clientX - parseInt(getComputedStyle(this.element).left);
    // } else {
    // Zoom
    this.startX =
      e.clientX -
      (parseInt(getComputedStyle(this.element).left) * 2 * this.zoomPercent) /
        100;
    this.startY =
      e.clientY -
      (parseInt(getComputedStyle(this.element).top) * 2 * this.zoomPercent) /
        100;
    // }
  }
  mousedownControl(e) {
    e.stopPropagation();
  }
  recenter() {
    this.element.style.top = '20px';
    this.zoomPercent = 50;
    this.setZoom();
    this.input.nativeElement.style.backgroundSize =
      ((this.zoomPercent - 5) * 100) / (100 - 5) + '% 100%';

    // Scale
    // this.element.style.left = (container.width - main.width) / 2 + 'px';
    // let container = this.container.nativeElement.getBoundingClientRect();
    // let main = this.element.getBoundingClientRect();

    // Zoom
    this.element.style.left = '50%';
  }

  changePercent(e) {
    this.zoomPercent = Number(e.target.value);
    this.setZoom();
    this.input.nativeElement.style.backgroundSize =
      ((e.target.value - 5) * 100) / (100 - 5) + '% 100%';
  }

  scroll(e) {
    if (e < 0 || e.deltaY < 0) {
      if (this.zoomPercent < 96) {
        this.zoomPercent = this.zoomPercent + 4;
        this.setZoom();
        this.input.nativeElement.style.backgroundSize =
          ((this.zoomPercent - 5) * 100) / (100 - 5) + '% 100%';
      }
    } else {
      if (this.zoomPercent > 4) {
        this.zoomPercent = this.zoomPercent - 4;
        this.setZoom();
        this.input.nativeElement.style.backgroundSize =
          ((this.zoomPercent - 5) * 100) / (100 - 5) + '% 100%';
      }
    }
  }
  setZoom() {
    this.element.style.zoom = this.zoomPercent * 2 + '%';
    // this.element.style.transform = `scale(${(this.zoomPercent * 2) / 100})`;
    // this.element.style.transform = `scale(${
    //   (this.zoomPercent * 2) / 100
    // }) translateX(-50%)`;
  }

  /**
   * Xóa vùng đang chọn
   * createdby ntdung5 13.06.2022
   */
  clearSelection() {
    if (window.getSelection()) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    }
    // else if (document.selection) {
    //   document.selection.empty();
    // }
  }
}
