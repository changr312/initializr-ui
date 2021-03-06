import { Component, OnInit } from '@angular/core';
import { Dependency } from '../models/dependency.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-dependency-dash',
  templateUrl: './dependency-dash.component.html',
  styleUrls: ['./dependency-dash.component.scss']
})
export class DependencyDashComponent implements OnInit {

  constructor(
    private formDataService: FormDataService
  ) { }

  dependency: Dependency = new Dependency();

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.dependency);
    this.formDataService.addDependency(this.dependency).subscribe();
  }
}
