import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmpPortalComponent } from './login-emp-portal.component';

describe('LoginEmpPortalComponent', () => {
  let component: LoginEmpPortalComponent;
  let fixture: ComponentFixture<LoginEmpPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEmpPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmpPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
