import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrganizationDiagramModule } from './component/organization-diagram/organization-diagram.module';

@NgModule({
  imports: [BrowserModule, FormsModule, OrganizationDiagramModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
