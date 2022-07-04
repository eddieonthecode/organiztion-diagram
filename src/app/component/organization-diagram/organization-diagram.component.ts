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
  tempOrg: any;
  managersPosition = {};
  managers = [];
  showManager = false;

  ngOnInit() {}

  ngAfterViewInit() {
    this.data.hoverManagerObs.subscribe((param) => {
      this.managers = param.managers || [];
      if (param.event) {
        let size = param.event.target.getBoundingClientRect();
        this.managersPosition = {
          top: size.bottom + 'px',
          left: size.left + 'px',
        };
      }
      this.showManager = param.show || false;
    });

    this.data.hoverManagerObs.subscribe((param) => {
      console.log(param);
    });

    this.element = this.draggable.nativeElement;
    this.recenter();
    // Sự kiện di chuột khắp màn hình
    document.addEventListener('mousemove', (e) => {
      if (this.isMoving) {
        this.element.style.cursor = 'all-scroll';
        this.clearSelection();
        if (this.detectBrowser().isFirefox) {
          // Scale
          this.element.style.left = e.clientX - this.startX + 'px';
          this.element.style.right = 'unset';
          this.element.style.top = e.clientY - this.startY + 'px';
          this.element.style.bottom = 'unset';
        } else {
          // Zoom
          this.element.style.left =
            ((e.clientX - this.startX) * 100) / (this.zoomPercent * 2) + 'px';
          this.element.style.right = 'unset';
          this.element.style.top =
            ((e.clientY - this.startY) * 100) / (this.zoomPercent * 2) + 'px';
          this.element.style.bottom = 'unset';
        }
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
   * Kiểm tra trình duyệt hiện tại là trình duyệt nào
   * createdby ntdung5 30.06.2022
   */
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

    if (this.detectBrowser().isFirefox) {
      // Scale
      this.startY = e.clientY - parseInt(getComputedStyle(this.element).top);
      this.startX = e.clientX - parseInt(getComputedStyle(this.element).left);
    } else {
      // Zoom
      this.startX =
        e.clientX -
        (parseInt(getComputedStyle(this.element).left) * 2 * this.zoomPercent) /
          100;
      this.startY =
        e.clientY -
        (parseInt(getComputedStyle(this.element).top) * 2 * this.zoomPercent) /
          100;
    }
  }

  /**
   * Về lại vị trí ban đầu
   * createdby ntdung5 30.06.2022
   */
  recenter() {
    this.element.style.top = '5%';
    this.zoomPercent = 50;
    this.setZoom();
    // Scale
    // this.element.style.left = (container.width - main.width) / 2 + 'px';
    // let container = this.container.nativeElement.getBoundingClientRect();
    // let main = this.element.getBoundingClientRect();

    // Zoom
    this.element.style.left = '50%';
  }

  /**
   * Thay đổi giá trị phần trăm
   * createdby ntdung5 30.06.20223
   */
  changePercent(e) {
    this.convertPXToPercent();
    this.zoomPercent = Number(e.target.value);
    this.setZoom();
    this.input.nativeElement.style.backgroundSize =
      ((e.target.value - 5) * 100) / (100 - 5) + '% 100%';
  }

  /**
   * Bắt sự kiện cuộn chuột
   * createdby ntdung5 30.06.2022
   */
  scroll(e) {
    this.convertPXToPercent();
    if (e < 0 || e.deltaY < 0) {
      if (this.zoomPercent < 95) {
        this.zoomPercent = this.zoomPercent + 5;
      } else {
        this.zoomPercent = 100;
      }
    } else {
      if (this.zoomPercent > 5) {
        this.zoomPercent = this.zoomPercent - 5;
      } else {
        this.zoomPercent = 5;
      }
    }
    this.setZoom();
    this.input.nativeElement.style.backgroundSize =
      ((this.zoomPercent - 5) * 100) / (100 - 5) + '% 100%';
  }

  /**
   * Đặt giá trị zoom hiện tại
   * createdby ntdung5 30.06.2022
   */
  setZoom() {
    if (this.detectBrowser().isFirefox) {
      this.element.style.transform = `scale(${
        (this.zoomPercent * 2) / 100
      }) translateX(-50%)`;
    } else {
      this.element.style.zoom = this.zoomPercent * 2 + '%';
    }
    // this.element.style.transform = `scale(${(this.zoomPercent * 2) / 100})`;
  }

  /**
   * Chuyển pixel về phần trăm
   * createdby ntdung5 30.06.2022
   */
  convertPXToPercent() {
    if (
      this.element.style.left.includes('px') ||
      this.element.style.right.includes('px')
    ) {
      let percentX =
        Number(
          this.element.style.left.slice(0, this.element.style.left.length - 2)
        ) / this.container.nativeElement.getBoundingClientRect().width;
      let percentY =
        Number(
          this.element.style.top.slice(0, this.element.style.top.length - 2)
        ) / this.container.nativeElement.getBoundingClientRect().height;
      this.element.style.left =
        ((percentX * 100 * this.zoomPercent * 2) / 100).toFixed(2) + '%';
      this.element.style.top =
        ((percentY * 100 * this.zoomPercent * 2) / 100).toFixed(2) + '%';
    }
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

  list_to_tree(list, idField, parentIdField, parentIdDefault) {
    var map = {},
      node,
      roots = [],
      i;

    for (i = 0; i < list.length; i += 1) {
      map[list[i][idField]] = i; // initialize the map
      list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node[parentIdField] !== parentIdDefault) {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node[parentIdField]]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}
