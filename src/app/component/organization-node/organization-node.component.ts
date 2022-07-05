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
  @Input() nodeData: any;
  @Input() level: number = 1;
  @Input() first: boolean = false;
  @Input() last: boolean = false;
  @Input() siblings = [];
  @Input() index: number;
  @Input() parentAbsolute: boolean = false;
  @Input() zoomPercent: any;
  @Output() changeCollapse = new EventEmitter<any>();

  constructor(private data: DataService, private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.data.changeCollapseLevelObs.subscribe((param) => {
      if (param.level == this.level && param.index != this.index) {
        this.checkChildren();
      }
    });
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

  /**
   * Đóng mở nút con
   * createdby ntdung5 05.07.2022
   */
  toggleCollapse() {
    this.nodeData.extend = !this.nodeData.extend;
    this.changeCollapse.emit();
  }

  /**
   * Sự kiện hover cho nút xem thêm quản lý cơ cấu
   * createdby ntdung5 05.07.2022
   */
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

  /**
   * Xử lý khi thay đổi đóng mở
   * createdby ntdung5 05.07.2022
   */
  changeCollapseHandler() {
    this.checkChildren();
    this.data.changeCollapseLevelHander({
      level: this.level,
      index: this.index,
    });
  }

  /**
   * Kiểm tra các nút con
   * createdby ntdung5 05.07.2022
   */
  checkChildren() {
    let idxNotSingle = [];
    let bonusLeft = 0;
    let bonusRight = 0;

    // Xóa vị trí cũ của các nút con
    for (let i = 0; i < this.nodeData.children.length; i++) {
      this.nodeData.children[i].position = null;
    }

    // Tìm ra tất cả những nút đang mở
    if (this.nodeData.children && this.nodeData.children.length) {
      this.nodeData.children.forEach((child, index) => {
        if (!this.isSingle(child)) {
          idxNotSingle.push(index);
        }
      });
    }
    idxNotSingle.forEach((idx) => {
      // Nếu nút ngay trước đang được đóng
      if (
        this.nodeData.children[idx - 1] &&
        this.isSingle(this.nodeData.children[idx - 1])
      ) {
        // Cộng thêm vào bonusLeft của cha
        bonusLeft += this.childrenDistance(this.nodeData.children[idx]) * 220;
        // Gán position left cho toàn bộ các nút bên trái
        for (let i = idx - 1; i >= 0; i--) {
          if (this.isSingle(this.nodeData.children[i])) {
            if (
              !this.nodeData.children[i].position ||
              !this.nodeData.children[i].position.left
            ) {
              this.nodeData.children[i].position = { left: 0 };
            }
            this.nodeData.children[i].position['left'] +=
              this.childrenDistance(this.nodeData.children[idx]) * 220;
          } else {
            break;
          }
        }
      }
      // Nếu nút ngay sau đang đóng
      if (
        this.nodeData.children[idx + 1] &&
        this.isSingle(this.nodeData.children[idx + 1])
      ) {
        // Cộng thêm bonusRight của cha
        bonusRight += this.childrenDistance(this.nodeData.children[idx]) * 220;
        // Gán position right cho toàn bộ các nút bên phải
        for (let i = idx + 1; i < this.nodeData.children.length; i++) {
          if (this.isSingle(this.nodeData.children[i])) {
            if (
              !this.nodeData.children[i].position ||
              !this.nodeData.children[i].position['right']
            ) {
              this.nodeData.children[i].position = { right: 0 };
            }
            this.nodeData.children[i].position['right'] +=
              this.childrenDistance(this.nodeData.children[idx]) * 220;
          } else {
            break;
          }
        }
      }
    });

    // Bonus được cộng dồn từ children
    for (let i = 0; i < this.nodeData.children.length; i++) {
      if (this.nodeData.children.position) {
        if (this.nodeData.children.position['left']) {
          this.nodeData.children.position['right'] = undefined;
        }
      }
    }
    this.changeCollapse.emit();
  }

  /**
   * Khoảng cách cộng thêm (Được tính từ độ co vào của các nút con)
   * createdby ntdung5 05.07.2022
   */
  bonusDistance() {}

  // bonusPosition() {
  //   let idxNotSingle = this.checkChildren;
  //   if (idxNotSingle) {

  //   }
  // }

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
    if (!result['right'] && result['left']) {
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
    if (this.nodeData.position) {
      if (this.nodeData.position['left']) {
        if (this.nodeData.extend) {
          return {
            width: `calc(${this.nodeData.position['left']}px)`,
            // left: `calc(-1px - ${this.nodeData.position['left']} + 50%)`,
          };
        } else {
          return {
            width: `calc(${this.nodeData.position['left']}px + 50%)`,
            left: `calc(1px - ${this.nodeData.position['left']}px)`,
          };
        }
      }
      if (this.nodeData.position['right']) {
        if (this.nodeData.extend) {
          return {
            width: `calc(${this.nodeData.position['right']}px)`,
            left: `calc(-1px - ${this.nodeData.position['right']}px + 50%)`,
          };
        } else {
          return {
            width: `calc(${this.nodeData.position['right']}px + 50%)`,
            right: `calc(-1px - ${this.nodeData.position['right']}px)`,
          };
        }
      }
    }
    return {};
  }
}
