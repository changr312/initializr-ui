import { ToasterModule } from 'angular2-toaster';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main/main.routing';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { TraceabilityComponent } from './traceability/traceability.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { JenkinsCiVersionTrackerComponent } from './visibility/jenkins-ci-version-tracker/jenkins-ci-version-tracker.component';


const PAGES_COMPONENTS = [
    PagesComponent
  ];


@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        MaterialModule,
        ToasterModule,
    ],
    declarations: [
        ...PAGES_COMPONENTS
    ]
})

export class PagesModule {
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement().classList.add('dark-theme');
      }
}
