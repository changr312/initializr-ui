import { Injectable } from "@angular/core";
import { Dependency } from "./models/dependency.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class FormDataService {

  constructor(private http: HttpClient) { }

  // Look into adding the httpresponse class
  addDependency(dependency: Dependency): Observable<Dependency> {
    return this.http.post<Dependency>('/rest/dependencies/add-dependency', dependency, httpOptions);
  }

  getDependencies() {
    return this.http.get('/rest/dependencies/get-dependencies', httpOptions);
  }
  
}
