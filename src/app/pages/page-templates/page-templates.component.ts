import { Component, OnInit } from '@angular/core';
import { ProjectTemplate } from '../models/project-template.model';

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

  projectTemplateName;
  dependencies;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.projectTemplateName);
    this.projectTemplateData.projectTemplateNm = this.projectTemplateName;
    console.log(this.dependencies);
    this.projectTemplateData.dependencies = this.dependencies;
  }
}
