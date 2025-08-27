import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5reactiveformComponent } from './ex5reactiveform.component';

describe('Ex5reactiveformComponent', () => {
  let component: Ex5reactiveformComponent;
  let fixture: ComponentFixture<Ex5reactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex5reactiveformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex5reactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
