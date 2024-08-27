import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDeploymentQuizComponent } from './testing-deployment-quiz.component';

describe('TestingDeploymentQuizComponent', () => {
  let component: TestingDeploymentQuizComponent;
  let fixture: ComponentFixture<TestingDeploymentQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDeploymentQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingDeploymentQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
