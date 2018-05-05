import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSpaceComponent } from './management-space.component';

describe('ManagementSpaceComponent', () => {
  let component: ManagementSpaceComponent;
  let fixture: ComponentFixture<ManagementSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
