import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonBarComponent } from './lesson-bar.component';

describe('LessonBarComponent', () => {
  let component: LessonBarComponent;
  let fixture: ComponentFixture<LessonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
