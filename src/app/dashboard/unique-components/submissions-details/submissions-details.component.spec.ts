import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsDetailsComponent } from './submissions-details.component';

describe('SubmissionsDetailsComponent', () => {
  let component: SubmissionsDetailsComponent;
  let fixture: ComponentFixture<SubmissionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
