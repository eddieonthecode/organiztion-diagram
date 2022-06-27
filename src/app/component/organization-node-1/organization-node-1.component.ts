import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-node-1',
  templateUrl: './organization-node-1.component.html',
  styleUrls: ['./organization-node-1.component.scss'],
})
export class OrganizationNode1Component implements OnInit {
  @Input() nodeData: any;
  constructor() {}

  ngOnInit() {}
}
