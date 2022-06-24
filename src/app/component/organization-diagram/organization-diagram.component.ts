import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-diagram',
  templateUrl: './organization-diagram.component.html',
  styleUrls: ['./organization-diagram.component.scss'],
})
export class OrganizationDiagramComponent implements OnInit {
  @Input() organizationData: any;
  constructor() {}

  ngOnInit() {}
}
