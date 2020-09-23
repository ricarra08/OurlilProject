import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BchomeComponent } from './bchome.component';

describe('BchomeComponent', () => {
  let component: BchomeComponent;
  let fixture: ComponentFixture<BchomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BchomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BchomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
