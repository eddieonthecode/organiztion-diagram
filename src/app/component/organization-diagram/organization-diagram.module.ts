import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationDiagramComponent } from './organization-diagram.component';
import { OrganizationNodeModule } from '../organization-node/organization-node.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, OrganizationNodeModule, FormsModule],
  declarations: [OrganizationDiagramComponent],
  exports: [OrganizationDiagramComponent],
})
export class OrganizationDiagramModule {}
