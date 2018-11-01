import { Injectable } from "@angular/core";
import { Dependency } from "./models/dependency.model";

@Injectable()
export class FormDataService{
    private dependency: Dependency = new Dependency();

    setDependency(data: any){
        this.dependency.name = data.dependency.name;
        this.dependency.id = data.dependency.id;
        this.dependency.description = data.dependency.description;
        this.dependency.versionRange = data.dependency.versionRange;
        this.dependency.groupId = data.dependency.groupId;
        this.dependency.artifactId = data.dependency.artifactId;
        this.dependency.version = data.dependency.version;
    }
}