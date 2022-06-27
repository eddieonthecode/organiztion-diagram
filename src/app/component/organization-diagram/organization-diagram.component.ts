import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-organization-diagram',
  templateUrl: './organization-diagram.component.html',
  styleUrls: ['./organization-diagram.component.scss'],
})
export class OrganizationDiagramComponent implements OnInit {
  @ViewChild('draggable', { read: ElementRef }) draggable: ElementRef;

  @Input() organizationData: any;
  constructor() {}
  isMoving = false;
  startX = 0;
  startY = 0;
  element: any;
  ngOnInit() {}

  ngAfterViewInit() {
    this.element = this.draggable.nativeElement;
    // Sự kiện di chuột khắp màn hình
    document.addEventListener('mousemove', (e) => {
      if (this.isMoving) {
        this.element.style.cursor = 'all-scroll';
        this.clearSelection();
        this.element.style.left = e.clientX - this.startX + 'px';
        this.element.style.right = 'unset';
        this.element.style.top = e.clientY - this.startY + 'px';
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
  /**
   * Sự kiện ấn chuột xuống
   * createdby ntdung5 13.06.2022
   */
  mousedown(e) {
    this.isMoving = true;
    this.startX = e.clientX - parseInt(getComputedStyle(this.element).left);
    this.startY = e.clientY - parseInt(getComputedStyle(this.element).top);
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
