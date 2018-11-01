import { Component, OnInit } from '@angular/core';
import { ProjectTemplate } from '../models/project-template.model';
import { FormDataService } from '../form-data.service';
import { Dependency, DependencySection } from '../models/dependency.model';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: ['./page-templates.component.scss']
})
export class PageTemplatesComponent implements OnInit {
  projectTemplateData: ProjectTemplate = {
    projectTemplateNm: null,
    dependencies: null,
  };

  allDependencies: DependencySection = new DependencySection();

  projectTemplateName;
  dependencies;

  constructor(
    private formDataService: FormDataService
  ) { }

  ngOnInit() {
    this.formDataService.getDependencies().subscribe(
      data =>{
        this.allDependencies = data;
      }
    );
  }

  onSubmit() {
    console.log(this.projectTemplateName);
    this.projectTemplateData.projectTemplateNm = this.projectTemplateName;
    console.log(this.dependencies);
    this.projectTemplateData.dependencies = this.dependencies;
  }
}
