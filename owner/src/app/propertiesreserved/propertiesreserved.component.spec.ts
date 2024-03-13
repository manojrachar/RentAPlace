import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesreservedComponent } from './propertiesreserved.component';

describe('ProertiesreservedComponent', () => {
  let component: PropertiesreservedComponent;
  let fixture: ComponentFixture<PropertiesreservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesreservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesreservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
