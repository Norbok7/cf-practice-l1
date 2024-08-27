import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAdvancedTopicsQuizComponent } from './angular-advanced-topics-quiz.component';

describe('AngularAdvancedTopicsQuizComponent', () => {
  let component: AngularAdvancedTopicsQuizComponent;
  let fixture: ComponentFixture<AngularAdvancedTopicsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAdvancedTopicsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularAdvancedTopicsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
