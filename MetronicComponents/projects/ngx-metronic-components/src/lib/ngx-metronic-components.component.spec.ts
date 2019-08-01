import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMetronicComponentsComponent } from './ngx-metronic-components.component';

describe('NgxMetronicComponentsComponent', () => {
  let component: NgxMetronicComponentsComponent;
  let fixture: ComponentFixture<NgxMetronicComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMetronicComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMetronicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
