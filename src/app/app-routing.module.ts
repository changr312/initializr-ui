import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependencyDashComponent } from './pages/dependency-dash/dependency-dash.component';
import { MainComponent } from './pages/main/main.component';
import { PageTemplatesComponent } from './pages/page-templates/page-templates.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dependency', component: DependencyDashComponent },
  { path: 'page-templates', component: PageTemplatesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
