import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyupdateComponent } from './propertyupdate.component';

describe('PropertyupdateComponent', () => {
  let component: PropertyupdateComponent;
  let fixture: ComponentFixture<PropertyupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
