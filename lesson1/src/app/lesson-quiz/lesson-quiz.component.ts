import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LessonTimerComponent } from '../lesson-timer/lesson-timer.component';
import { Question } from './quiz-questions.model'; // Ensure the path is correct

// Importing questions from different files
import { JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS } from '../quiz-questions/JAVASCRIPT/javascript-data-types-variables-operators-comparisons-conditionals-flows-loops-questions';
import { TYPESCRIPT_INTRODUCTION_QUESTIONS } from '../quiz-questions/ANGULAR/typescript-introduction-questions';
import { ANGULAR_GETTING_STARTED_QUESTIONS } from '../quiz-questions/ANGULAR/angular-getting-started-questions';
import { ANGULAR_PROJECT_BASICS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-project-basics-questions';
import { ANGULAR_COMPONENTS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-components-questions';
import { ANGULAR_DIRECTIVES_QUESTIONS } from '../quiz-questions/ANGULAR/angular-directives-questions';
import { ANGULAR_ROUTING_QUESTIONS } from '../quiz-questions/ANGULAR/angular-routing-questions';
import { ANGULAR_FORMS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-forms-questions';
import { ANGULAR_HTTP_QUESTIONS } from '../quiz-questions/ANGULAR/angular-http-questions';
import { ANGULAR_AUTHENTICATION_QUESTIONS } from '../quiz-questions/ANGULAR/angular-authentication-questions';
import { ANGULAR_DYNAMIC_COMPONENTS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-dynamic-components-questions';
import { ANGULAR_ANIMATIONS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-animations-questions';
import { ANGULAR_UNIT_TESTING_QUESTIONS } from '../quiz-questions/ANGULAR/angular-unit-testing-questions';
import { BASIC_HTML_CSS_DEV_TOOLS } from '../quiz-questions/BASICS HTML/CSS/DEV TOOLS/GITHUB/html-css-devtools-questions';
import { GITHUB_VERSION_CONTROL_QUESTIONS } from '../quiz-questions/BASICS HTML/CSS/DEV TOOLS/GITHUB/github-version-control-questions';
import { INTERMEDIATE_CSS_WITH_RESPONSIVE_DESIGN_QUESTIONS } from '../quiz-questions/BASICS HTML/CSS/DEV TOOLS/GITHUB/intermediate-css-with-responsive-design';

@Component({
  selector: 'app-lesson-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, LessonTimerComponent],
  templateUrl: './lesson-quiz.component.html',
  styleUrls: ['./lesson-quiz.component.css']
})
export class LessonQuizComponent {
  // Defining quiz sections with categorized questions
  sections: { title: string; questions: Question[] }[] = [
    // Basic Angular and TypeScript
    { title: 'Basic Angular & TypeScript', questions: [
        ...ANGULAR_GETTING_STARTED_QUESTIONS,
        ...ANGULAR_PROJECT_BASICS_QUESTIONS,
        ...ANGULAR_COMPONENTS_QUESTIONS,
        ...ANGULAR_DIRECTIVES_QUESTIONS,
        ...ANGULAR_ROUTING_QUESTIONS,
        ...ANGULAR_FORMS_QUESTIONS,
        ...ANGULAR_HTTP_QUESTIONS,
        ...ANGULAR_AUTHENTICATION_QUESTIONS,
        ...ANGULAR_DYNAMIC_COMPONENTS_QUESTIONS,
        ...ANGULAR_ANIMATIONS_QUESTIONS,
        ...ANGULAR_UNIT_TESTING_QUESTIONS,
        ...TYPESCRIPT_INTRODUCTION_QUESTIONS
    ]},

    // JavaScript
    { title: 'JavaScript', questions: [
        ...JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS
        // Add more JavaScript related questions here if available
    ]},

    // Basics
    { title: 'Basics', questions: [
        ...BASIC_HTML_CSS_DEV_TOOLS,
        ...INTERMEDIATE_CSS_WITH_RESPONSIVE_DESIGN_QUESTIONS,
        ...GITHUB_VERSION_CONTROL_QUESTIONS
        // Add more basic related questions here if available
    ]}
  ];

  currentSectionIndex: number = 0;
  currentQuestionIndex: number = 0;
  selectedOption: string = '';
  feedback: string = '';
  isAnswerCorrect: boolean = false;
  showReview: boolean = false;
  results: { section: string, index: number, question: string, selectedOption: string, correctAnswer: string, isCorrect: boolean }[] = [];
  questionNumbers: number[] = [];

  @ViewChild(LessonTimerComponent) timerComponent!: LessonTimerComponent;

  constructor() {
    this.updateQuestionNumbers();
  }

  getCurrentSection() {
    return this.sections[this.currentSectionIndex];
  }

  submitAnswer() {
    const currentQuestion: Question = this.getCurrentSection().questions[this.currentQuestionIndex];
    this.isAnswerCorrect = this.selectedOption === currentQuestion.answer;
    this.feedback = this.isAnswerCorrect ? 'Correct Answer!' : 'Wrong Answer!';

    this.results.push({
      section: this.getCurrentSection().title,
      index: this.currentQuestionIndex,
      question: currentQuestion.question,
      selectedOption: this.selectedOption,
      correctAnswer: currentQuestion.answer,
      isCorrect: this.isAnswerCorrect
    });

    this.currentQuestionIndex++;
    this.selectedOption = ''; // Reset selected option after submission

    if (this.currentQuestionIndex >= this.getCurrentSection().questions.length) {
      this.showReview = true; // Show review section after all questions
    } else {
      this.timerComponent.resetTimer(); // Reset timer for the new question
    }
    this.updateQuestionNumbers();
  }

  reviewAnswers() {
    this.showReview = true;
  }

  isAnswered(questionNumber: number): boolean {
    return this.results.some(result => result.index + 1 === questionNumber);
  }

  navigateToQuestion(questionNumber: number) {
    if (questionNumber < 1 || questionNumber > this.getCurrentSection().questions.length) {
      return;
    }
    this.currentQuestionIndex = questionNumber - 1;
    this.selectedOption = this.results.find(result => result.index + 1 === questionNumber)?.selectedOption || '';
    this.feedback = '';
    this.timerComponent.resetTimer();
  }

  get correctCount(): number {
    return this.results.filter(result => result.isCorrect).length;
  }

  get correctPercentage(): number {
    return Math.round((this.correctCount / this.getCurrentSection().questions.length) * 100);
  }

  private updateQuestionNumbers() {
    this.questionNumbers = Array.from({ length: this.getCurrentSection().questions.length }, (_, i) => i + 1);
  }
  changeSection(event: Event) {
    const target = event.target as HTMLSelectElement;
    const sectionIndex = parseInt(target.value, 10);

    if (sectionIndex >= 0 && sectionIndex < this.sections.length) {
      this.currentSectionIndex = sectionIndex;
      this.currentQuestionIndex = 0; // Reset to the first question of the new section
      this.selectedOption = '';
      this.feedback = '';
      this.showReview = false; // Hide review section when changing sections
      this.updateQuestionNumbers();
    }
  }
}
