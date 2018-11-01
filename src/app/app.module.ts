import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DependencyDashComponent } from './pages/dependency-dash/dependency-dash.component';
import { FormDataService } from './pages/form-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DependencyDashComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
