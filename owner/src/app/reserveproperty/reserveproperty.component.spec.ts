import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservepropertyComponent } from './reserveproperty.component';

describe('ReservepropertyComponent', () => {
  let component: ReservepropertyComponent;
  let fixture: ComponentFixture<ReservepropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservepropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
