import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3DemoComponent } from './ex3-demo.component';

describe('Ex3DemoComponent', () => {
  let component: Ex3DemoComponent;
  let fixture: ComponentFixture<Ex3DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex3DemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
