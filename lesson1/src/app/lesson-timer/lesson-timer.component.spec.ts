import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTimerComponent } from './lesson-timer.component';

describe('LessonTimerComponent', () => {
  let component: LessonTimerComponent;
  let fixture: ComponentFixture<LessonTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
