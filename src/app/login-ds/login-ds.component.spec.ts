import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDsComponent } from './login-ds.component';

describe('LoginDsComponent', () => {
  let component: LoginDsComponent;
  let fixture: ComponentFixture<LoginDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
