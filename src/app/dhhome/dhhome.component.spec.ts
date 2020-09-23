import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhhomeComponent } from './dhhome.component';

describe('DhhomeComponent', () => {
  let component: DhhomeComponent;
  let fixture: ComponentFixture<DhhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
