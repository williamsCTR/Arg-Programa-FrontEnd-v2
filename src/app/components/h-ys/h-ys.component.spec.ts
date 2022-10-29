import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HYsComponent } from './h-ys.component';

describe('HYsComponent', () => {
  let component: HYsComponent;
  let fixture: ComponentFixture<HYsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HYsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HYsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
