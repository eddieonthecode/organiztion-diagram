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
  @Output() updatePosition = new EventEmitter<any>();
  constructor(private data: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.convertUnit) {
      this.updatePosition.emit({
        position: this.convertUnit,
        index: this.index,
      });
    }
  }
  updatePositionHandler(e) {
    let position = e.position;
    if (this.nodeData.children[e.index - 1] && e.position.left) {
      this.nodeData.children[e.index - 1].position = position;
      setTimeout(() => {
        this.nodeData.children[e.index - 1].position = position;
        console.log(this.nodeData, position);
      }, 200);
    }
    if (this.nodeData.children[e.index + 1] && e.position.right) {
      this.nodeData.children[e.index + 1].position = position;
    }
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
    this.nodeData.collapse = !this.nodeData.collapse;
    this.data.changeCollapse('');
  }

  /**
   * Chuyển đổi đơn vị
   * createdby ntdung5 28.06.2022
   */
  get convertUnit() {
    let offset = this.relativeOffset;
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
      case 'none':
        result = null;
        break;
      default:
        result = null;
        break;
    }
    this.nodeData.position = result;
    return result;
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
}
