import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4StyleDemoComponent } from './ex4-style-demo.component';

describe('Ex4StyleDemoComponent', () => {
  let component: Ex4StyleDemoComponent;
  let fixture: ComponentFixture<Ex4StyleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex4StyleDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4StyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
