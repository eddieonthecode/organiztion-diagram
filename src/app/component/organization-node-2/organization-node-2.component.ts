import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-node-2',
  templateUrl: './organization-node-2.component.html',
  styleUrls: ['./organization-node-2.component.scss'],
})
export class OrganizationNode2Component implements OnInit {
  @Input() nodeData: any;
  constructor() {}

  ngOnInit() {}
}
