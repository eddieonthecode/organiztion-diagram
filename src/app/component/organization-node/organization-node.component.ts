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
  constructor(private data: DataService, private cd: ChangeDetectorRef) {}
  ngOnInit() {}

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
  }

  mouseenterMore(e) {
    this.data.changeCollapse({
      show: true,
      managers: this.nodeData.managers.slice(3),
      event: e,
    });
  }

  mouseleaveMore(e) {
    this.data.changeCollapse({ show: false, managers: [], event: e });
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
      result['right'] += 'px';
      for (let i = this.index + 1; i < this.siblings.length; i++) {
        if (this.isSingle(this.siblings[i])) {
          this.siblings[i].position = { right: result['right'] };
        }
      }
    }
    if (result['left']) {
      result['left'] += 'px';
      for (let i = 0; i < this.index; i++) {
        if (this.isSingle(this.siblings[i])) {
          this.siblings[i].position = { left: result['left'] };
        }
      }
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
      result = this.siblings[this.index + 1].children.length / 2 - 0.5;
    } else {
      result = Math.floor(this.siblings[this.index + 1].children.length / 2);
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

  // get bonusOffset() {
  //   if (
  //     this.siblings[this.index + 1] &&
  //     this.siblings[this.index + 1].position &&
  //     this.siblings[this.index + 1].position.left
  //   ) {
  //     this.nodeData.position = this.siblings[this.index + 1].position;
  //     return this.nodeData.position;
  //   } else if (
  //     this.siblings[this.index - 1] &&
  //     this.siblings[this.index - 1].position &&
  //     this.siblings[this.index - 1].position.right
  //   ) {
  //     this.nodeData.position = this.siblings[this.index - 1].position;
  //     return this.nodeData.position;
  //   }
  //   return null;
  // }

  // /**
  //  * Là vị trí tương đối - Cho phép các node sát nhau hơn
  //  * createdby ntdung5 27.06.2022
  //  */
  // get relativeOffset() {
  //   let unit = 220;
  //   let result;
  //   if (
  //     !this.nodeData.children ||
  //     this.nodeData.children.length == 0 ||
  //     this.nodeData.extend
  //   ) {
  //     let prevNode = this.siblings[this.index - 1];
  //     let nextNode = this.siblings[this.index + 1];
  //     if (
  //       prevNode &&
  //       prevNode.children &&
  //       prevNode.children.length &&
  //       !prevNode.extend
  //     ) {
  //       if (prevNode.children.length % 2 == 0) {
  //         result = {
  //           right: (prevNode.children.length / 2 - 0.5) * unit + 'px',
  //         };
  //       } else {
  //         result = {
  //           right: Math.floor(prevNode.children.length / 2) * unit + 'px',
  //         };
  //       }
  //     }
  //     if (
  //       nextNode &&
  //       nextNode.children &&
  //       nextNode.children.length &&
  //       !nextNode.extend
  //     ) {
  //       if (nextNode.children.length.child % 2 == 0) {
  //         result = {
  //           left: (nextNode.children.length / 2 - 0.5) * unit + 'px',
  //         };
  //       } else {
  //         result = {
  //           left: Math.floor(nextNode.children.length / 2) * unit + 'px',
  //         };
  //       }
  //     }
  //   }
  //   return result;
  // }

  // styleHiddenLine() {
  //   let relativeOffset = this.relativeOffset;
  //   if (relativeOffset) {
  //     if (relativeOffset.left) {
  //       return {
  //         width: `calc(50% + ${relativeOffset.left})`,
  //         left: `calc(-1px + ${relativeOffset.left})`,
  //       };
  //     }
  //     if (relativeOffset.right) {
  //       return {
  //         width: `calc(50% + ${relativeOffset.right})`,
  //         right: `calc(-1px + -${relativeOffset.right})`,
  //       };
  //     }
  //   }
  //   return {};
  // }
}
