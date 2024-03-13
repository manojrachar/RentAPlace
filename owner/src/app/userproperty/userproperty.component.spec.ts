import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpropertyComponent } from './userproperty.component';

describe('UserpropertyComponent', () => {
  let component: UserpropertyComponent;
  let fixture: ComponentFixture<UserpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
