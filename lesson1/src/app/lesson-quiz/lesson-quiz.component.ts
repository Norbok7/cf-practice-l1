import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
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
import { ANGULAR_PROJECT_BASICS_QUESTIONS } from '../quiz-questions/ANGULAR/angular-project-basics-questions';
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
        ...ANGULAR_ANIMATIONS_DEPLOYING_QUESTIONS,
        ...ANGULAR_UNIT_TESTING_QUESTIONS,
        ...TYPESCRIPT_INTRODUCTION_QUESTIONS
    ]},

    // JavaScript
    { title: 'JavaScript', questions: [
        ...JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS,
        ...JAVASCRIPT_ADVANCED_CONCEPTS_QUESTIONS,
        ...JAVASCRIPT_BUILDING_REAL_THINGS_QUESTIONS,
        ...JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS,
        ...JAVASCRIPT_DATA_TYPES_VARIABLES_OPERATORS_COMPARISONS_CONDITIONALS_FLOWS_LOOPS,
        ...JAVASCRIPT_FUNCTIONS_OBJECTS_BUILTIN_OBJECTS,
        ...JAVASCRIPT_INTERMEDIATE_CONCEPTS_QUESTIONS,
        ...JAVASCRIPT_BOOKMARKING_APP_QUESTIONS   ]},

    // HTML/CSS
    { title: 'HTML/CSS', questions: [
        ...BASIC_HTML_CSS_DEV_TOOLS,
        ...GITHUB_VERSION_CONTROL_QUESTIONS,
        ...INTERMEDIATE_CSS_WITH_RESPONSIVE_DESIGN_QUESTIONS,

    ]}
  ];

  currentSectionIndex: number = 0;
  currentQuestionIndex: number = 0;
  selectedOption: string | null = null;
  feedback: string = '';
  showReview: boolean = false;
  results: { index: number; question: string; selectedOption: string; correctAnswer: string; isCorrect: boolean }[] = [];
  correctCount: number = 0;
  questionNumbers: number[] = [];
  questionNumbersLimit: number = 25; // Limit for the question numbers displayed

  ngOnInit() {
    this.updateQuestionNumbers();
  }

  // Method to update question numbers for the active section
  updateQuestionNumbers() {
    const currentSectionQuestions = this.getCurrentSection().questions;
    this.questionNumbers = Array.from({ length: Math.min(currentSectionQuestions.length, this.questionNumbersLimit) }, (_, i) => i + 1);
  }

  // Get the current section based on index
  getCurrentSection() {
    return this.sections[this.currentSectionIndex];
  }

  // Method to handle quiz section change
  changeSection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.currentSectionIndex = +selectElement.value;
    this.currentQuestionIndex = 0;
    this.updateQuestionNumbers();
  }

  // Method to navigate to a specific question
  navigateToQuestion(number: number) {
    this.currentQuestionIndex = number - 1;
  }

  // Method to submit the current answer
  submitAnswer() {
    const currentQuestion = this.getCurrentSection().questions[this.currentQuestionIndex];
    if (this.selectedOption !== null) {
      const isCorrect = this.selectedOption === currentQuestion.answer;
      this.feedback = isCorrect ? 'Correct!' : `Incorrect. The correct answer was: ${currentQuestion.answer}`;
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
      this.selectedOption = null;
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex >= this.getCurrentSection().questions.length) {
        this.showReview = true;
      }
    } else {
      this.feedback = 'Please select an option.';
    }
  }

  // Method to check if a question has been answered
  isAnswered(number: number) {
    return this.results.some(result => result.index === (number - 1));
  }

  // Calculate the percentage of correct answers
  get correctPercentage() {
    return this.correctCount / this.getCurrentSection().questions.length * 100;
  }
}
