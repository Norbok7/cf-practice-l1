import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptAdvancedQuizComponent } from './javascript-advanced-quiz.component';

describe('JavascriptAdvancedQuizComponent', () => {
  let component: JavascriptAdvancedQuizComponent;
  let fixture: ComponentFixture<JavascriptAdvancedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptAdvancedQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptAdvancedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
