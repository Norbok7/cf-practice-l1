import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lesson-bar.component.html',
  styleUrls: ['./lesson-bar.component.css']
})
export class LessonBarComponent {
  topics = [
    {
      title: 'Basics',
      lessons: [
        'HTML/CSS + Dev Tools',
        'Intermediate CSS with Responsive Design',
        'GitHub Version Control'
      ],
      expanded: false
    },
    {
      title: 'JavaScript',
      lessons: [
        'JavaScript: Data Types & Variables, Operators, Comparisons, Conditionals, Flows, Loops',
        'JavaScript: Functions, Objects, Built-in Objects',
        'JavaScript: Scope, Hoisting, JavaScript vs EcmaScript',
        'JavaScript Intermediate Concepts',
        'JavaScript Advanced Concepts',
        'JavaScript: Building Real Things',
        'JavaScript: Bookmarking App'
      ],
      expanded: false
    },
    {
      title: 'Angular & TypeScript',
      lessons: [
        'TypeScript: Introduction',
        'Angular: Completing Getting Started',
        'Angular: The Basics, Debugging',
        'Angular: Components & Databinding deep dive',
        'Angular: Directives deep dive',
        'Angular: Routing & Observables',
        'Angular: Handling forms in Angular apps',
        'Angular: Making HTTP requests',
        'Angular: Authentication & Route Protection',
        'Angular: Dynamic Components, Modules & Optimizations',
        'Angular: Animations, Service Workers & Deployment',
        'Angular: Unit Testing'
      ],
      expanded: false
    },
  ];

  // Function to handle lesson group toggle
  toggleLessons(topic: any) {
    topic.expanded = !topic.expanded;
  }

  // Function to handle individual lesson selection
  onSelectLesson(lesson: string) {
    console.log('Selected Lesson:', lesson);
    // Implement further logic, such as routing to the detailed view of the lesson
  }

  // Function to close all dropdowns
  closeAllLessons() {
    this.topics.forEach(topic => topic.expanded = false);
  }

   // Function to check if any dropdown is expanded
   isAnyDropdownExpanded() {
    return this.topics.some(topic => topic.expanded);
  }
}
