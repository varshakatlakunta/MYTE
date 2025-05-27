import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargecodesComponent } from './chargecodes.component';

describe('ChargecodesComponent', () => {
  let component: ChargecodesComponent;
  let fixture: ComponentFixture<ChargecodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChargecodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargecodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
