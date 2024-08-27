import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptFoundationsQuizComponent } from './javascript-foundations-quiz.component';

describe('JavascriptFoundationsQuizComponent', () => {
  let component: JavascriptFoundationsQuizComponent;
  let fixture: ComponentFixture<JavascriptFoundationsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptFoundationsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptFoundationsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
