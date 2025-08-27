import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3reactiveComponent } from './ex3reactive.component';

describe('Ex3reactiveComponent', () => {
  let component: Ex3reactiveComponent;
  let fixture: ComponentFixture<Ex3reactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex3reactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3reactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
