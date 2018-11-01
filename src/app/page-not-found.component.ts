import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-404',
  styles: ['.page-content {margin: 2em;} *{text-align:center;}'],
  template: `<div class="page-content"><mat-card>
    <article>
      <h4>404!</h4>
      <div>Page not Found.</div>
    </article></mat-card></div>
  `
})
export class PageNotFoundComponent { }
