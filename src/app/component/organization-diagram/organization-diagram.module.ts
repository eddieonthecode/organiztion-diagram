import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationDiagramComponent } from './organization-diagram.component';
import { OrganizationNode1Module } from '../organization-node-1/organization-node-1.module';

@NgModule({
  imports: [CommonModule, OrganizationNode1Module],
  declarations: [OrganizationDiagramComponent],
  exports: [OrganizationDiagramComponent],
})
export class OrganizationDiagramModule {}
