export class DependencySection {
    name: string;
    content: Dependency[];
}

export class Dependency {
    name: string;
    id: string;
    description: string;
    versionRange: string;
    groupId: string;
    artifactId: string;
    version: string;
}