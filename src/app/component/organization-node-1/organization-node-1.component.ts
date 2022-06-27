import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-node-1',
  templateUrl: './organization-node-1.component.html',
  styleUrls: ['./organization-node-1.component.scss'],
})
export class OrganizationNode1Component implements OnInit {
  @Input() nodeData: any;
  @Input() level: number = 1;
  constructor() {}

  ngOnInit() {}

  numberToString(number) {
    switch (number) {
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
      case 10:
        return 'ten';
    }
  }
}
