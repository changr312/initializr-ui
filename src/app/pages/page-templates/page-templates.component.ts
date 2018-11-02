import { Component, OnInit } from '@angular/core';
import { ProjectTemplate } from '../models/project-template.model';
import { FormDataService } from '../form-data.service';
import { DependencySection } from '../models/dependency.model';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: ['./page-templates.component.scss']
})
export class PageTemplatesComponent implements OnInit {
  projectTemplateData: ProjectTemplate = new ProjectTemplate();

  allDependencies: DependencySection = new DependencySection();

  coreDependency: DependencySection = new DependencySection();
  customDependency: DependencySection = new DependencySection();

  projectTemplateName;
  dependencies;

  ids: string[] = [];

  constructor(
    private formDataService: FormDataService
  ) { }

  ngOnInit() {
    this.formDataService.getDependencies().subscribe(
      data =>{
        this.allDependencies = data;

        this.coreDependency = this.allDependencies[0];
        console.log(this.coreDependency);
        this.customDependency = this.allDependencies[19];  
        console.log(this.customDependency);      
      }
    );


  }

  onSubmit() {
    this.projectTemplateData.dependencies = this.ids;
    console.log(this.projectTemplateData);
    }

  checkboxChanged(id: string) {
    this.ids.push(id);
  }

}
