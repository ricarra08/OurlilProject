import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPhomeComponent } from './emphome.component';

describe('EMPhomeComponent', () => {
  let component: EMPhomeComponent;
  let fixture: ComponentFixture<EMPhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
