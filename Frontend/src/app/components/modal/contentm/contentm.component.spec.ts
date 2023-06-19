import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmComponent } from './contentm.component';

describe('ContentmComponent', () => {
  let component: ContentmComponent;
  let fixture: ComponentFixture<ContentmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
