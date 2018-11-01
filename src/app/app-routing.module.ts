import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependencyDashComponent } from './pages/dependency-dash/dependency-dash.component';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'dependency', component: DependencyDashComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
