import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmissionsComponent } from './edit-submissions.component';

describe('EditSubmissionsComponent', () => {
  let component: EditSubmissionsComponent;
  let fixture: ComponentFixture<EditSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
