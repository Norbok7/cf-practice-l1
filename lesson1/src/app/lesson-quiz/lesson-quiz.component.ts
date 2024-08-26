import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LessonTimerComponent } from '../lesson-timer/lesson-timer.component';

@Component({
  selector: 'app-lesson-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, LessonTimerComponent,],
  templateUrl: './lesson-quiz.component.html',
  styleUrl: './lesson-quiz.component.css'
})
export class LessonQuizComponent {
  questions = [
    { id: 1, question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { id: 2, question: 'In Angular, a component can be directly injected into another component without using a service. (True/False)', options: [], answer: 'False' },
    { id: 3, question: 'Angular’s dependency injection system can be used for any injectable class. (True/False)', options: [], answer: 'True' },
    { id: 4, question: 'Which Angular decorator is used to define a service?', options: ['@Component', '@Injectable', '@Directive', '@Pipe'], answer: '@Injectable' },
    { id: 5, question: 'What is the default change detection strategy in Angular?', options: ['OnPush', 'Default', 'NoChange', 'Manual'], answer: 'Default' },
    { id: 6, question: 'What is the purpose of `ngModel` in Angular?', options: ['To define a new Angular module', 'To bind a form input to a property in the component', 'To create a new Angular component', 'To define a route in the Angular application'], answer: 'To bind a form input to a property in the component' },
    { id: 7, question: 'Which Angular module should be imported to use HTTP services?', options: ['HttpClientModule', 'FormsModule', 'ReactiveFormsModule', 'RouterModule'], answer: 'HttpClientModule' },
    { id: 8, question: 'The `ngOnInit` lifecycle hook is called before the `constructor` of an Angular component. (True/False)', options: [], answer: 'False' },
    { id: 9, question: 'In Angular, pipes can be used to transform data in templates without altering the original data. (True/False)', options: [], answer: 'True' },
    { id: 10, question: 'The `FormsModule` is required for template-driven forms but not for reactive forms in Angular. (True/False)', options: [], answer: 'True' },
    { id: 11, question: 'Which of the following is NOT a valid Angular lifecycle hook?', options: ['ngOnDestroy', 'ngOnChanges', 'ngAfterViewInit', 'ngOnInit', 'ngAfterViewChange'], answer: 'ngAfterViewChange' },
    { id: 12, question: 'Angular components are decorated with which decorator?', options: ['@Component', '@Injectable', '@NgModule', '@Directive'], answer: '@Component' },
    { id: 13, question: 'In Angular, how do you bind a component property to an HTML element?', options: ['Using `@Input` decorator', 'Using `ngModel` directive', 'Using `{{ }}` syntax', 'Using `[(ngModel)]` syntax'], answer: 'Using `[(ngModel)]` syntax' },
    { id: 14, question: 'What is the main purpose of Angular services?', options: ['To define routes', 'To share data and logic across components', 'To handle HTTP requests', 'To style components'], answer: 'To share data and logic across components' },
    { id: 15, question: 'Which of the following commands creates a new Angular component?', options: ['ng generate component', 'ng create component', 'ng add component', 'ng build component'], answer: 'ng generate component' },
    { id: 16, question: 'In Angular, what is a module?', options: ['A component', 'A collection of services', 'A container for a group of related components, directives, pipes, and services', 'A type of directive'], answer: 'A container for a group of related components, directives, pipes, and services' },
    { id: 17, question: 'True or False: Angular modules can import other modules.', options: [], answer: 'True' },
    { id: 18, question: 'Which lifecycle hook is used to perform actions after Angular initializes the component’s views and child views?', options: ['ngAfterViewInit', 'ngOnInit', 'ngOnChanges', 'ngOnDestroy'], answer: 'ngAfterViewInit' },
    { id: 19, question: 'In Angular, the `@NgModule` decorator is used to define:', options: ['A component', 'A service', 'A module', 'A directive'], answer: 'A module' },
    { id: 20, question: 'True or False: Angular components can have multiple template files.', options: [], answer: 'False' },
    { id: 21, question: 'What is the purpose of `ReactiveFormsModule` in Angular?', options: ['To create reactive forms', 'To handle HTTP requests', 'To manage component styling', 'To manage routing'], answer: 'To create reactive forms' },
    { id: 22, question: 'Which directive is used to bind an HTML element’s attribute to a component property?', options: ['ngClass', 'ngStyle', 'ngModel', 'ngBind'], answer: 'ngBind' },
    { id: 23, question: 'True or False: Angular’s `RouterModule` is used to handle routing within the application.', options: [], answer: 'True' },
    { id: 24, question: 'Which of the following is NOT a valid Angular directive?', options: ['@Component', '@Directive', '@Pipe', '@Service'], answer: '@Service' },
    { id: 25, question: 'What is the main function of the `ngFor` directive in Angular?', options: ['To loop through a collection and render a template for each item', 'To conditionally render elements', 'To bind form inputs', 'To handle user events'], answer: 'To loop through a collection and render a template for each item' }
  ];

  currentQuestionIndex: number = 0;
  selectedOption: string = '';
  feedback: string = '';
  isAnswerCorrect: boolean = false;
  showReview: boolean = false;
  results: { index: number, question: string, selectedOption: string, correctAnswer: string, isCorrect: boolean }[] = [];
  questionNumbers: number[] = Array.from({ length: this.questions.length }, (_, i) => i + 1);

  @ViewChild(LessonTimerComponent) timerComponent!: LessonTimerComponent;

  submitAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.isAnswerCorrect = this.selectedOption === currentQuestion.answer;
    this.feedback = this.isAnswerCorrect ? 'Correct Answer!' : 'Wrong Answer!';

    this.results.push({
      index: this.currentQuestionIndex,
      question: currentQuestion.question,
      selectedOption: this.selectedOption,
      correctAnswer: currentQuestion.answer,
      isCorrect: this.isAnswerCorrect
    });

    this.currentQuestionIndex++;
    this.selectedOption = ''; // Reset selected option after submission

    if (this.currentQuestionIndex >= this.questions.length) {
      this.showReview = true; // Show review section after all questions
    } else {
      this.timerComponent.resetTimer(); // Reset timer for the new question
    }
  }

  reviewAnswers() {
    this.showReview = true;
  }

  isAnswered(questionNumber: number): boolean {
    return this.results.some(result => result.index + 1 === questionNumber);
  }

  navigateToQuestion(questionNumber: number) {
    this.currentQuestionIndex = questionNumber - 1;
    this.selectedOption = this.results.find(result => result.index + 1 === questionNumber)?.selectedOption || '';
    this.feedback = '';
    this.timerComponent.resetTimer();
  }

  get correctCount(): number {
    return this.results.filter(result => result.isCorrect).length;
  }

  get correctPercentage(): number {
    return Math.round((this.correctCount / this.questions.length) * 100);
  }
}
