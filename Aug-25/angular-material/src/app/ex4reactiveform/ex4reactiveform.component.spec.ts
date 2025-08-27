import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4reactiveformComponent } from './ex4reactiveform.component';

describe('Ex4reactiveformComponent', () => {
  let component: Ex4reactiveformComponent;
  let fixture: ComponentFixture<Ex4reactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex4reactiveformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4reactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
