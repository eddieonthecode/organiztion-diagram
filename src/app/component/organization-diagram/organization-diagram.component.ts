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
    // this.data.currentMessage.subscribe(() => {
    //   if (this.element && this.container.nativeElement) {
    //     setTimeout(() => {
    //       let sizeMain = this.element.getBoundingClientRect();
    //       let sizeContainer =
    //         this.container.nativeElement.getBoundingClientRect();
    //       console.log(sizeContainer.width - sizeMain.width);
    //       this.element.style.left =
    //         (sizeContainer.width - sizeMain.width) / 2 + 'px';
    //     }, 0);
    //   }
    // });

    this.element = this.draggable.nativeElement;
    // let sizeMain = this.element.getBoundingClientRect();
    // let sizeContainer = this.container.nativeElement.getBoundingClientRect();
    // this.element.style.left = (sizeContainer.width - sizeMain.width) / 2 + 'px';
    // this.element.style.top =
    //   (sizeContainer.height - sizeMain.height) / 2 + 'px';

    // Sự kiện di chuột khắp màn hình
    document.addEventListener('mousemove', (e) => {
      if (this.isMoving) {
        this.element.style.cursor = 'all-scroll';
        this.clearSelection();
        // Scale
        this.element.style.left = e.clientX - this.startX + 'px';
        this.element.style.right = 'unset';
        this.element.style.top = e.clientY - this.startY + 'px';
        this.element.style.bottom = 'unset';
        // Zoom
        // this.element.style.left =
        //   ((e.clientX - this.startX) * 100) / (this.zoomPercent * 2) + 'px';
        // this.element.style.right = 'unset';
        // this.element.style.top =
        //   ((e.clientY - this.startY) * 100) / (this.zoomPercent * 2) + 'px';
        // this.element.style.bottom = 'unset';
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
  /**
   * Sự kiện ấn chuột xuống
   * createdby ntdung5 13.06.2022
   */
  mousedown(e) {
    this.isMoving = true;

    // Scale
    this.startX = e.clientX - parseInt(getComputedStyle(this.element).left);
    this.startY = e.clientY - parseInt(getComputedStyle(this.element).top);
    // Zoom
    // this.startX =
    //   e.clientX -
    //   (parseInt(getComputedStyle(this.element).left) * 2 * this.zoomPercent) /
    //     100;
    // this.startY =
    //   e.clientY -
    //   (parseInt(getComputedStyle(this.element).top) * 2 * this.zoomPercent) /
    //     100;
  }
  mousedownControl(e) {
    e.stopPropagation();
  }
  changePercent(e) {
    this.zoomPercent = Number(e.target.value);
    this.setZoom();
    this.input.nativeElement.style.backgroundSize =
      ((e.target.value - 5) * 100) / (100 - 5) + '% 100%';
  }
  scroll(e) {
    if (e.deltaY < 0) {
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
    // this.element.style.zoom = this.zoomPercent * 2 + '%';
    this.element.style.transform = `scale(${(this.zoomPercent * 2) / 100})`;
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
