import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptBasicsQuizComponent } from './typescript-basics-quiz.component';

describe('TypescriptBasicsQuizComponent', () => {
  let component: TypescriptBasicsQuizComponent;
  let fixture: ComponentFixture<TypescriptBasicsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptBasicsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptBasicsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
