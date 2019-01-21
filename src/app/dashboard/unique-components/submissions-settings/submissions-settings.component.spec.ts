import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsSettingsComponent } from './submissions-settings.component';

describe('SubmissionsSettingsComponent', () => {
  let component: SubmissionsSettingsComponent;
  let fixture: ComponentFixture<SubmissionsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
