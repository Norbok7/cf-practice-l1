import { CommonModule } from '@angular/common';
import { Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LessonTimerComponent } from '../lesson-timer/lesson-timer.component';
import { Question } from './quiz-questions.model'; // Ensure the path is correct

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
import { ANGULAR_FORMS_AND_PIPES_QUESTIONS } from '../quiz-questions/ANGULAR/angular-forms-and-pipes-questions';
import { ANGULAR_ASYNCHRONOUS_CONCEPTS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-asynchronous_concepts_questions';

@Component({
  selector: 'app-lesson-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, LessonTimerComponent,
   ],
  templateUrl: './lesson-quiz.component.html',
  styleUrls: ['./lesson-quiz.component.css']
})
export class LessonQuizComponent {


  // Defining quiz sections with categorized questions
  sections: { title: string; questions: Question[] }[] = [
    { title: '#1 HTML/CSS + Dev Tools', questions: BASIC_HTML_CSS_DEV_TOOLS,},
    { title: '#2 Intermediate CSS with Responsive Design', questions: INTERMEDIATE_CSS_WITH_RESPONSIVE_DESIGN_QUESTIONS },
    { title: '#3 JavaScript: Data Types & Variables, Operators, Comparisons, Conditionals, Flows, Loops', questions: JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS },
    { title: '#4 JavaScript: Functions, Objects, Built-in Objects', questions: JAVASCRIPT_FUNCTIONS_OBJECTS_BUILTIN_OBJECTS },
    { title: '#5 JavaScript: Scope, Hoisting, JavaScript vs EcmaScript', questions: JAVASCRIPT_ESSENTIAL_CONCEPTS_SCOPE_HOISTING_JAVASCRIPTVSECMASCRIPT_QUESTIONS },
    { title: '#6 JavaScript Intermediate Concepts', questions: JAVASCRIPT_INTERMEDIATE_CONCEPTS_QUESTIONS },
    { title: '#7 JavaScript Advanced Concepts', questions: JAVASCRIPT_ADVANCED_CONCEPTS_QUESTIONS },
    { title: '#8 JavaScript: Building Real Things', questions: JAVASCRIPT_BUILDING_REAL_THINGS_QUESTIONS },
    { title: '#9 JavaScript: Bookmarking App', questions: JAVASCRIPT_BOOKMARKING_APP_QUESTIONS },
    { title: '#10 TypeScript: Introduction', questions: TYPESCRIPT_INTRODUCTION_QUESTIONS },
    { title: '#11 Angular: Completing Getting Started', questions: ANGULAR_GETTING_STARTED_QUESTIONS },
    { title: '#12 Angular: The Basics, Debugging', questions: ANGULAR_PROJECT_BASICS_DEBUGGING_QUESTIONS },
    { title: '#13 Angular: Components & Databinding deep dive', questions: ANGULAR_COMPONENTS_QUESTIONS },
    { title: '#14 Angular: Directives deep dive', questions: ANGULAR_DIRECTIVES_QUESTIONS },
    { title: '#15 Angular: Routing & Observables', questions: ANGULAR_ROUTING_QUESTIONS },
    { title: '#16 Angular: Asynchronous Concepts', questions: ANGULAR_ASYNCHRONOUS_CONCEPTS_QUESTIONS },
    { title: '#17 Angular: Handling forms in Angular apps', questions: ANGULAR_FORMS_QUESTIONS },
    { title: '#18 Angular: Forms & Pipes', questions: ANGULAR_FORMS_AND_PIPES_QUESTIONS },
    { title: '#19 Angular: Making HTTP requests', questions: ANGULAR_HTTP_QUESTIONS },
    { title: '#20 Angular: Authentication & Route Protection', questions: ANGULAR_AUTHENTICATION_QUESTIONS },
    { title: '#21 Angular: Dynamic Components, Modules & Optimizations', questions: ANGULAR_DYNAMIC_COMPONENTS_QUESTIONS },
    { title: '#22 Angular: Animations, Service Workers & Deployment', questions: ANGULAR_ANIMATIONS_DEPLOYING_QUESTIONS },
    { title: '#23 Angular: Unit Testing', questions: ANGULAR_UNIT_TESTING_QUESTIONS },
    { title: '#24 GitHub Version Control', questions: GITHUB_VERSION_CONTROL_QUESTIONS }
  ];


  currentSectionIndex: number = 0;
  currentQuestionIndex: number = 0;
  selectedOption: string | null = null;
  selectedAnswers: { [key: number]: string } = {};
  feedback: string = '';
  showReview: boolean = false;
  results: { index: number; question: string; selectedOption: string; correctAnswer: string; isCorrect: boolean }[] = [];
  correctCount: number = 0;
  totalQuestions: number = 0;
  previousScores: any[] = [];
  questionNumbers: number[] = Array.from({ length: 25 }, (_, i) => i + 1); // Assuming 25 questions
  answers = {}; // Object to store answers, e.g., {1: 'True', 2: 'False'}
  selectedQuizTitle: string = '';

  @ViewChild(LessonTimerComponent) timerComponent!: LessonTimerComponent;

  constructor() {
    this.previousScores = JSON.parse(localStorage.getItem('previousScores') || '[]');
  }


  getCurrentSection() {
    return this.sections[this.currentSectionIndex];
  }

    // Method to get the current answer or default to an empty string
    getSelectedAnswer(): string {
      return this.selectedAnswers[this.currentQuestionIndex] || '';
    }

  changeSection(event: any) {
    this.currentSectionIndex = parseInt(event.target.value, 10);
    this.currentQuestionIndex = 0;  // Reset to the first question
    this.selectedOption = null;     // Clear any previously selected option
    this.feedback = '';             // Clear feedback message
    this.showReview = false;        // Hide review mode

    // Reset the question navigation states
    this.results = [];              // Clear previous results if needed
    this.correctCount = 0;          // Reset correct answers count
    this.totalQuestions = this.getCurrentSection().questions.length; // Update total questions

    // Update the question navigation numbers
    this.questionNumbers = Array.from({ length: this.totalQuestions }, (_, i) => i + 1);
    this.selectedQuizTitle = this.getCurrentSection().title;

    // Reset the timer
    this.resetTimer();
  }

  submitAnswer() {
    if (this.selectedOption) {
      const currentQuestion = this.getCurrentSection().questions[this.currentQuestionIndex];
      const isCorrect = this.selectedOption === currentQuestion.answer;

      // Save the selected answer
      this.selectedAnswers[this.currentQuestionIndex] = this.selectedOption;

      // Update results array with the answer feedback
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

      // Update feedback message
      this.feedback = isCorrect ? 'Correct!' : 'Incorrect, try again!';

      // Clear selected option
      this.selectedOption = null;

      // Move to the next question or show results
      if (this.currentQuestionIndex < this.getCurrentSection().questions.length - 1) {
        this.currentQuestionIndex++;
        // Reset the timer for the next question
        this.resetTimer();
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
    console.log('Scores saved:', this.previousScores);  // Add this line
  }


  isAnswered(questionNumber: number): boolean {
    return this.results.some(result => result.index + 1 === questionNumber && result.selectedOption !== undefined);
  }

  isCorrect(questionNumber: number): boolean {
    const result = this.results.find(result => result.index + 1 === questionNumber);
    return result ? result.selectedOption === result.correctAnswer : false;
  }

  navigateToQuestion(questionNumber: number) {
    this.currentQuestionIndex = questionNumber - 1;
    this.selectedOption = this.getSelectedAnswer(); // Update selectedOption to the previously selected answer
    this.resetTimer(); // Reset the timer when navigating to a specific question
  }

  getQuizStatus(quizTitle: string): string {
    const scoresForQuiz = this.previousScores.filter(score => score.sectionTitle === quizTitle);
    if (scoresForQuiz.length === 0) {
      return '';
    }
    const latestScore = scoresForQuiz.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    const percentage = (latestScore.correctCount / latestScore.totalQuestions) * 100;
    if (percentage > 70) {
      return 'above-70';
    } else {
      return 'below-70';
    }
  }

  handleTimerExpiry() {
    // Handle the logic for when the timer expires, such as submitting the answer or showing a message
    if (!this.showReview) {
      this.submitAnswer(); // Automatically submit the answer when time expires
    }
  }

  resetTimer() {
    if (this.timerComponent) {
      this.timerComponent.resetTimer(); // Reset the timer component
    }
  }

  get correctPercentage() {
    return (this.correctCount / this.getCurrentSection().questions.length) * 100;
  }



}
