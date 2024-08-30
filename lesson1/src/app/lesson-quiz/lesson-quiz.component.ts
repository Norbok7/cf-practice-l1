import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LessonTimerComponent } from '../lesson-timer/lesson-timer.component';
import { Question } from './quiz-questions.model'; // Ensure the path is correct
import { QuizresultService } from '../quizresult.service';
// Importing questions from different files
import { JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS } from '../quiz-questions/JAVASCRIPT/javascript-data-types-variables-operators-comparisons-conditionals-flows-loops-questions';
import { TYPESCRIPT_INTRODUCTION_QUESTIONS } from '../quiz-questions/ANGULAR/typescript-introduction-questions';
import { JAVASCRIPT_ADVANCED_CONCEPTS_QUESTIONS } from '../quiz-questions/JAVASCRIPT/javascript-advanced-concepts';
import { JAVASCRIPT_BOOKMARKING_APP_QUESTIONS } from '../quiz-questions/JAVASCRIPT/javascripts-bookmarking-app';
import { JAVASCRIPT_FUNCTIONS_OBJECTS_BUILTIN_OBJECTS } from '../quiz-questions/JAVASCRIPT/javascript-functions-objects-built-in-objects';
import { JAVASCRIPT_INTERMEDIATE_CONCEPTS_QUESTIONS } from '../quiz-questions/JAVASCRIPT/javascript-intermediate-concepts';
import { JAVASCRIPT_BUILDING_REAL_THINGS_QUESTIONS } from '../quiz-questions/JAVASCRIPT/javascript-building-real-things';

import { ANGULAR_GETTING_STARTED_QUESTIONS } from '../quiz-questions/ANGULAR/angular-getting-started-questions';
import { ANGULAR_PROJECT_BASICS_DEBUGGING_QUESTIONS } from '../quiz-questions/ANGULAR/angular-project-basics-questions';
import { ANGULAR_COMPONENTS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-components-questions';
import { ANGULAR_DIRECTIVES_QUESTIONS } from '../quiz-questions/ANGULAR/angular-directives-questions';
import { ANGULAR_ROUTING_QUESTIONS } from '../quiz-questions/ANGULAR/angular-routing-questions';
import { ANGULAR_FORMS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-forms-questions';
import { ANGULAR_HTTP_QUESTIONS } from '../quiz-questions/ANGULAR/angular-http-questions';
import { ANGULAR_AUTHENTICATION_QUESTIONS } from '../quiz-questions/ANGULAR/angular-authentication-questions';
import { ANGULAR_DYNAMIC_COMPONENTS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-dynamic-components-questions';
import { ANGULAR_ANIMATIONS_DEPLOYING_QUESTIONS } from '../quiz-questions/ANGULAR/angular-animations-questions';
import { ANGULAR_UNIT_TESTING_QUESTIONS } from '../quiz-questions/ANGULAR/angular-unit-testing-questions';
import { BASIC_HTML_CSS_DEV_TOOLS } from '../quiz-questions/BASICS HTML/CSS/DEV TOOLS/GITHUB/html-css-devtools-questions';
import { GITHUB_VERSION_CONTROL_QUESTIONS } from '../quiz-questions/BASICS HTML/CSS/DEV TOOLS/GITHUB/github-version-control-questions';
import { INTERMEDIATE_CSS_WITH_RESPONSIVE_DESIGN_QUESTIONS } from '../quiz-questions/BASICS HTML/CSS/DEV TOOLS/GITHUB/intermediate-css-with-responsive-design';
import { JAVASCRIPT_ESSENTIAL_CONCEPTS_SCOPE_HOISTING_JAVASCRIPTVSECMASCRIPT_QUESTIONS } from '../quiz-questions/JAVASCRIPT/javascript-essential-concepts-scope-hoisting-javascriptsvsecmascript';

@Component({
  selector: 'app-lesson-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, LessonTimerComponent, ],
  templateUrl: './lesson-quiz.component.html',
  styleUrls: ['./lesson-quiz.component.css']
})
export class LessonQuizComponent {


  // Defining quiz sections with categorized questions
  sections: { title: string; questions: Question[] }[] = [
    { title: 'HTML/CSS + Dev Tools', questions: BASIC_HTML_CSS_DEV_TOOLS,},
    { title: 'Intermediate CSS with Responsive Design', questions: INTERMEDIATE_CSS_WITH_RESPONSIVE_DESIGN_QUESTIONS },
    { title: 'JavaScript: Data Types & Variables, Operators, Comparisons, Conditionals, Flows, Loops', questions: JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS },
    { title: 'JavaScript: Functions, Objects, Built-in Objects', questions: JAVASCRIPT_FUNCTIONS_OBJECTS_BUILTIN_OBJECTS },
    { title: 'JavaScript: Scope, Hoisting, JavaScript vs EcmaScript', questions: JAVASCRIPT_ESSENTIAL_CONCEPTS_SCOPE_HOISTING_JAVASCRIPTVSECMASCRIPT_QUESTIONS },
    { title: 'JavaScript Intermediate Concepts', questions: JAVASCRIPT_INTERMEDIATE_CONCEPTS_QUESTIONS },
    { title: 'JavaScript Advanced Concepts', questions: JAVASCRIPT_ADVANCED_CONCEPTS_QUESTIONS },
    { title: 'JavaScript: Building Real Things', questions: JAVASCRIPT_BUILDING_REAL_THINGS_QUESTIONS },
    { title: 'JavaScript: Bookmarking App', questions: JAVASCRIPT_BOOKMARKING_APP_QUESTIONS },
    { title: 'TypeScript: Introduction', questions: TYPESCRIPT_INTRODUCTION_QUESTIONS },
    { title: 'Angular: Completing Getting Started', questions: ANGULAR_GETTING_STARTED_QUESTIONS },
    { title: 'Angular: The Basics, Debugging', questions: ANGULAR_PROJECT_BASICS_DEBUGGING_QUESTIONS },
    { title: 'Angular: Components & Databinding deep dive', questions: ANGULAR_COMPONENTS_QUESTIONS },
    { title: 'Angular: Directives deep dive', questions: ANGULAR_DIRECTIVES_QUESTIONS },
    { title: 'Angular: Routing & Observables', questions: ANGULAR_ROUTING_QUESTIONS },
    { title: 'Angular: Handling forms in Angular apps', questions: ANGULAR_FORMS_QUESTIONS },
    { title: 'Angular: Making HTTP requests', questions: ANGULAR_HTTP_QUESTIONS },
    { title: 'Angular: Authentication & Route Protection', questions: ANGULAR_AUTHENTICATION_QUESTIONS },
    { title: 'Angular: Dynamic Components, Modules & Optimizations', questions: ANGULAR_DYNAMIC_COMPONENTS_QUESTIONS },
    { title: 'Angular: Animations, Service Workers & Deployment', questions: ANGULAR_ANIMATIONS_DEPLOYING_QUESTIONS },
    { title: 'Angular: Unit Testing', questions: ANGULAR_UNIT_TESTING_QUESTIONS },
    { title: 'GitHub Version Control', questions: GITHUB_VERSION_CONTROL_QUESTIONS }
  ];


  currentSectionIndex: number = 0;
  currentQuestionIndex: number = 0;
  selectedOption: string | null = null;
  feedback: string = '';
  showReview: boolean = false;
  results: { index: number; question: string; selectedOption: string; correctAnswer: string; isCorrect: boolean }[] = [];
  correctCount: number = 0;
  totalQuestions: number = 0;
  previousScores: any[] = [];
  questionNumbers: number[] = Array.from({ length: 25 }, (_, i) => i + 1); // Assuming 25 questions

  constructor() {
    this.previousScores = JSON.parse(localStorage.getItem('previousScores') || '[]');
  }


  getCurrentSection() {
    return this.sections[this.currentSectionIndex];
  }

  changeSection(event: any) {
    this.currentSectionIndex = parseInt(event.target.value, 10);
    this.currentQuestionIndex = 0;
    this.selectedOption = null;
    this.feedback = '';
    this.showReview = false;
  }

  submitAnswer() {
    if (this.selectedOption) {
      const currentQuestion = this.getCurrentSection().questions[this.currentQuestionIndex];
      const isCorrect = this.selectedOption === currentQuestion.answer;
      this.results.push({
        index: this.currentQuestionIndex,
        question: currentQuestion.question,
        selectedOption: this.selectedOption,
        correctAnswer: currentQuestion.answer,
        isCorrect: isCorrect
      });

      if (isCorrect) {
        this.correctCount++;
      }
      this.feedback = isCorrect ? 'Correct!' : 'Incorrect, try again!';
      this.selectedOption = null;

      if (this.currentQuestionIndex < 24) {
        this.currentQuestionIndex++;
      } else {
        this.showReview = true;
        this.saveScore();
      }
    }
  }

  saveScore() {
    const scoreData = {
      sectionTitle: this.getCurrentSection().title,
      correctCount: this.correctCount,
      totalQuestions: this.getCurrentSection().questions.length,
      date: new Date()
    };
    this.previousScores.push(scoreData);
    localStorage.setItem('previousScores', JSON.stringify(this.previousScores));
  }


  isAnswered(questionNumber: number): boolean {
    return this.results.some(result => result.index + 1 === questionNumber);
  }

  navigateToQuestion(questionNumber: number) {
    this.currentQuestionIndex = questionNumber - 1;
  }

  get correctPercentage() {
    return (this.correctCount / this.getCurrentSection().questions.length) * 100;
  }
}
