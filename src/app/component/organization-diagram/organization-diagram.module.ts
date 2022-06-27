import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationDiagramComponent } from './organization-diagram.component';
import { OrganizationNodeModule } from '../organization-node/organization-node.module';

@NgModule({
  imports: [CommonModule, OrganizationNodeModule],
  declarations: [OrganizationDiagramComponent],
  exports: [OrganizationDiagramComponent],
})
export class OrganizationDiagramModule {}
