import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DependencyDashComponent } from './pages/dependency-dash/dependency-dash.component';
import { PageTemplatesComponent } from './pages/page-templates/page-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    DependencyDashComponent,
    MainComponent,
    PageTemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
