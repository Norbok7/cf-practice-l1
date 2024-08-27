import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasedLearningQuizComponent } from './project-based-learning-quiz.component';

describe('ProjectBasedLearningQuizComponent', () => {
  let component: ProjectBasedLearningQuizComponent;
  let fixture: ComponentFixture<ProjectBasedLearningQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBasedLearningQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBasedLearningQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
