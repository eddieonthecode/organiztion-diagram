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
  //     this.nodeData.collapse
  //   ) {
  //     let prevNode = this.siblings[this.index - 1];
  //     let nextNode = this.siblings[this.index + 1];
  //     if (
  //       prevNode &&
  //       prevNode.children &&
  //       prevNode.children.length &&
  //       !prevNode.collapse
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
  //       !nextNode.collapse
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
