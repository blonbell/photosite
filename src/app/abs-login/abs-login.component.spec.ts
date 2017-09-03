import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsLoginComponent } from './abs-login.component';

describe('AbsLoginComponent', () => {
  let component: AbsLoginComponent;
  let fixture: ComponentFixture<AbsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
