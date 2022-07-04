import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { DataService } from '../../service/data-service.service';
@Component({
  selector: 'app-organization-node',
  templateUrl: './organization-node.component.html',
  styleUrls: ['./organization-node.component.scss'],
})
export class OrganizationNodeComponent implements OnInit {
  _rootData: any;
  @Input() set rootData(value) {
    if (this.nodeData) {
      this.checkChildren();
    }
    this._rootData = value;
  }
  get rootData() {
    return this._rootData;
  }
  @Input() nodeData: any;
  @Input() level: number = 1;
  @Input() first: boolean = false;
  @Input() last: boolean = false;
  @Input() siblings = [];
  @Input() index: number;
  @Input() parentAbsolute: boolean = false;
  @Input() zoomPercent: any;

  constructor(private data: DataService, private cd: ChangeDetectorRef) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.checkChildren();
  }

  /**
   * Chuyển số level sang class ứng với nó
   * createdby ntdung5 27.06.2022
   */
  numberToString(number) {
    switch (number % 10) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'night';
      case 0:
        return 'ten';
    }
  }

  toggleCollapse() {
    this.nodeData.extend = !this.nodeData.extend;
    this.siblings.forEach((sib) => {
      sib.position = null;
    });
    this.data.changeCollapseHandler(this.nodeData.extend);
  }

  mouseenterMore(e) {
    this.data.hoverManagerHandler({
      show: true,
      managers: this.nodeData.managers.slice(3),
      event: e,
    });
  }

  mouseleaveMore(e) {
    this.data.hoverManagerHandler({ show: false, managers: [], event: e });
  }

  checkChildren() {
    let idxNotSingle = null;
    if (this.nodeData.children && this.nodeData.children.length) {
      this.nodeData.children.forEach((child, index) => {
        if (!this.isSingle(child)) {
          idxNotSingle = index;
        }
      });
    }
    if (idxNotSingle !== null) {
      for (let i = 0; i < idxNotSingle; i++) {
        if (this.isSingle(this.nodeData.children[i])) {
          this.nodeData.children[i].position = {
            left:
              this.childrenDistance(this.nodeData.children[idxNotSingle]) *
                220 +
              'px',
          };
        }
      }
      for (let i = idxNotSingle + 1; i < this.nodeData.children.length; i++) {
        if (this.isSingle(this.nodeData.children[i])) {
          this.nodeData.children[i].position = {
            right:
              this.childrenDistance(this.nodeData.children[idxNotSingle]) *
                220 +
              'px',
          };
        }
      }
    }
  }

  get relativeOffset() {
    let result = {};
    let unit = 220;
    if (this.isSingle(this.nodeData)) {
      // Xét điều kiện căn về trái
      if (
        this.siblings[this.index - 1] &&
        !this.isSingle(this.siblings[this.index - 1])
      ) {
        if (!result['right']) {
          result['right'] = 0;
        }
        result['right'] +=
          this.childrenDistance(this.siblings[this.index - 1]) * unit;
      }

      // Nếu đã căn về phải thì thôi không căn về trái
      if (!result['right']) {
        if (
          this.siblings[this.index + 1] &&
          !this.isSingle(this.siblings[this.index + 1])
        ) {
          if (!result['left']) {
            result['left'] = 0;
          }
          result['left'] +=
            this.childrenDistance(this.siblings[this.index + 1]) * unit;
        }
      }
    }
    if (result['right']) {
      for (let i = this.index + 1; i < this.siblings.length; i++) {
        if (this.isSingle(this.siblings[i])) {
          this.siblings[i].position = { right: result['right'] + 'px' };
        } else {
          let childrenDistance = this.childrenDistance(this.siblings[i]);
          if (result['right'] > childrenDistance * 220) {
            this.siblings[i].position =
              result['right'] - childrenDistance * 220 + 'px';
          } else {
            this.siblings[i].position = { right: result['right'] + 'px' };
          }
        }
      }
      result['right'] += 'px';
    }
    if (result['left']) {
      for (let i = 0; i < this.index; i++) {
        if (this.isSingle(this.siblings[i])) {
          this.siblings[i].position = { left: result['left'] + 'px' };
        } else {
          let childrenDistance = this.childrenDistance(this.siblings[i]);
          if (result['left'] > childrenDistance * 220) {
            this.siblings[i].position =
              result['left'] - childrenDistance * 220 + 'px';
          } else {
            this.siblings[i].position = { right: result['left'] + 'px' };
          }
        }
      }
      result['left'] += 'px';
    }
    if (this.isEmpty(result)) {
      result = null;
    }
    return result;
  }

  /**
   * Khoảng xòe ra của một nút (Được tính theo số lượng nút con)
   * createdby ntdung5 04.07.2022
   */
  childrenDistance(nodeData) {
    let result;
    if (nodeData.children.length % 2 == 0) {
      result = nodeData.children.length / 2 - 0.5;
    } else {
      result = Math.floor(nodeData.children.length / 2);
    }
    return result;
  }

  /**
   * Là nút đang ẩn children hoặc không có children
   * createdby ntdung5 04.07.2022
   */
  isSingle(nodeData) {
    return !nodeData.children || !nodeData.children.length || !nodeData.extend;
  }

  isEmpty(object) {
    for (const property in object) {
      return false;
    }
    return true;
  }

  get styleHiddenLine() {
    if (this.relativeOffset) {
      if (this.relativeOffset['left']) {
        return {
          width: `calc(${this.relativeOffset['left']})`,
          left: `calc(-1px - ${this.relativeOffset['left']} + 50%)`,
        };
      }
      if (this.relativeOffset['right']) {
        return {
          width: `calc(${this.relativeOffset['right']})`,
          right: `calc(-1px + ${this.relativeOffset['right']} - 50%)`,
        };
      }
    }
    return {};
  }
}
