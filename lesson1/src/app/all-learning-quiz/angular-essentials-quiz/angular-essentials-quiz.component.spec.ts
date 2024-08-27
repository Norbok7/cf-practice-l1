import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEssentialsQuizComponent } from './angular-essentials-quiz.component';

describe('AngularEssentialsQuizComponent', () => {
  let component: AngularEssentialsQuizComponent;
  let fixture: ComponentFixture<AngularEssentialsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularEssentialsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularEssentialsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
