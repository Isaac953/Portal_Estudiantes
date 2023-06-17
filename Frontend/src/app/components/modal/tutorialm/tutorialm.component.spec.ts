import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialmComponent } from './tutorialm.component';

describe('TutorialmComponent', () => {
  let component: TutorialmComponent;
  let fixture: ComponentFixture<TutorialmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
