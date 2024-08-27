import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionBasicsQuizComponent } from './introduction-basics-quiz.component';

describe('IntroductionBasicsQuizComponent', () => {
  let component: IntroductionBasicsQuizComponent;
  let fixture: ComponentFixture<IntroductionBasicsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionBasicsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductionBasicsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
