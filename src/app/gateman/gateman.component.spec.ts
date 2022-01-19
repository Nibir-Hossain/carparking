import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatemanComponent } from './gateman.component';

describe('GatemanComponent', () => {
  let component: GatemanComponent;
  let fixture: ComponentFixture<GatemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
