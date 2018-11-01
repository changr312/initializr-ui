import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyDashComponent } from './dependency-dash.component';

describe('DependencyDashComponent', () => {
  let component: DependencyDashComponent;
  let fixture: ComponentFixture<DependencyDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
