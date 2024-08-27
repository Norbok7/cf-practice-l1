import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDeepDiveQuizComponent } from './angular-deep-dive-quiz.component';

describe('AngularDeepDiveQuizComponent', () => {
  let component: AngularDeepDiveQuizComponent;
  let fixture: ComponentFixture<AngularDeepDiveQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDeepDiveQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularDeepDiveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
