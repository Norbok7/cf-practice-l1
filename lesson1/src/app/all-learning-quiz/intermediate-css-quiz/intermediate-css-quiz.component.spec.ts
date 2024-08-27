import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateCssQuizComponent } from './intermediate-css-quiz.component';

describe('IntermediateCssQuizComponent', () => {
  let component: IntermediateCssQuizComponent;
  let fixture: ComponentFixture<IntermediateCssQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateCssQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateCssQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
