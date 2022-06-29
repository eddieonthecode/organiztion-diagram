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
    this.nodeData.collapse = !this.nodeData.collapse;
    this.data.changeCollapse('');
  }

  /**
   * Chuyển đổi đơn vị
   * createdby ntdung5 28.06.2022
   */
  get convertUnit() {
    let offset = this.relativeOffset;
    if (offset.code != 'none') {
      let unit = 220;
      let result;
      switch (offset.code) {
        case 'prev':
          if (offset.child % 2 == 0) {
            result = { right: (offset.child / 2 - 0.5) * unit + 'px' };
          } else {
            result = { right: Math.floor(offset.child / 2) * unit + 'px' };
          }
          break;
        case 'next':
          if (offset.child % 2 == 0) {
            result = { left: (offset.child / 2 - 0.5) * unit + 'px' };
          } else {
            result = { left: Math.floor(offset.child / 2) * unit + 'px' };
          }
          break;
        default:
          result = null;
          break;
      }
      this.nodeData.position = result;
      if (result) {
        if (this.siblings[this.index - 1] && result.left) {
          this.siblings[this.index - 1].position = result;
        }
        if (this.siblings[this.index + 1] && result.right) {
          this.siblings[this.index + 1].position = result;
        }
      }
      return result;
    } else {
      return null;
    }
  }

  /**
   * Là vị trí tương đối - Cho phép các node sát nhau hơn
   * createdby ntdung5 27.06.2022
   */
  get relativeOffset() {
    if (
      !this.nodeData.children ||
      this.nodeData.children.length == 0 ||
      this.nodeData.collapse
    ) {
      let prevNode = this.siblings[this.index - 1];
      let nextNode = this.siblings[this.index + 1];
      if (
        prevNode &&
        prevNode.children &&
        prevNode.children.length &&
        !prevNode.collapse
      ) {
        return { code: 'prev', child: prevNode.children.length };
      }
      if (
        nextNode &&
        nextNode.children &&
        nextNode.children.length &&
        !nextNode.collapse
      ) {
        return { code: 'next', child: nextNode.children.length };
      }
      return { code: 'none' };
    } else {
      return { code: 'none' };
    }
  }

  styleHiddenLine() {
    let convertUnit = this.convertUnit;
    if (convertUnit) {
      if (convertUnit.left) {
        return { width: `calc(50% + ${convertUnit.left})` };
      }
      if (convertUnit.right) {
        return { width: `calc(50% + ${convertUnit.right})` };
      }
    }
    return {};
  }
}
