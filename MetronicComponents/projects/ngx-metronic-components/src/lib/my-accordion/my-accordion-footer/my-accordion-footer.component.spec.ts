import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccordionFooterComponent } from './my-accordion-footer.component';

describe('MyAccordionFooterComponent', () => {
  let component: MyAccordionFooterComponent;
  let fixture: ComponentFixture<MyAccordionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccordionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccordionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
