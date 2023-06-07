import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythondbComponent } from './pythondb.component';

describe('PythondbComponent', () => {
  let component: PythondbComponent;
  let fixture: ComponentFixture<PythondbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythondbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythondbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
