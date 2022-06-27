import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

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

  /**
   * Là vị trí tương đối - Cho phép các node sát nhau hơn
   * createdby ntdung5 27.06.2022
   */
  get isAbsolute() {
    if (!this.nodeData.children || this.nodeData.children.length == 0) {
      return false;
    } else {
      let prevNode = this.siblings[this.index - 1];
      let nextNode = this.siblings[this.index + 1];
      if (
        (!prevNode ||
          !prevNode.children ||
          prevNode.children.length == 0 ||
          prevNode.collapse) &&
        (!nextNode ||
          !nextNode.children ||
          nextNode.children.length == 0 ||
          nextNode.collapse)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
