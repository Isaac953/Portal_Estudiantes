import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythontestComponent } from './pythontest.component';

describe('PythontestComponent', () => {
  let component: PythontestComponent;
  let fixture: ComponentFixture<PythontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythontestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
