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

  onSubmit(){
    console.log(this.dependency);
    //TODO send dependency object to service call to create
  }
}
