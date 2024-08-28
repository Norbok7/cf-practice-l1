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
      title: 'Introduction & Basics',
      lessons: [
        'Class Introduction',
        'Basic HTML & CSS',
        'Dev Tools'
      ],
      expanded: false
    },
    {
      title: 'Intermediate CSS & Responsive Design',
      lessons: [
        'Advanced CSS Techniques',
        'Responsive Design Concepts'
      ],
      expanded: false
    },
    {
      title: 'JavaScript Foundations',
      lessons: [
        'JavaScript: Getting Started',
        'Data Types & Variables',
        'Operators, Comparisons, Conditionals',
        'Flows & Loops'
      ],
      expanded: false
    },
    {
      title: 'JavaScript Essential & Advanced Concepts',
      lessons: [
        'Functions & Objects',
        'Built-in Objects',
        'Scope & Hoisting',
        'JavaScript vs ECMAScript'
      ],
      expanded: false
    },
    {
      title: 'TypeScript Basics',
      lessons: [
        'TypeScript: Introduction'
      ],
      expanded: false
    },
    {
      title: 'Angular Essentials',
      lessons: [
        'Angular: Completing Getting Started',
        'Angular: Course Project - The Basics',
        'Angular: Debugging'
      ],
      expanded: false
    },
    {
      title: 'Angular Deep Dive',
      lessons: [
        'Angular: Components & Databinding Deep Dive',
        'Angular: Directives Deep Dive',
        'Angular: Changing Pages with Routing',
        'Angular: Course Project - Routing & Observables',
        'Angular: Handling Forms in Angular Apps'
      ],
      expanded: false
    },
    {
      title: 'Angular Advanced Topics',
      lessons: [
        'Angular: Making HTTP Requests',
        'Angular: Authentication & Route Protection',
        'Angular: Dynamic Components, Modules & Optimizations',
        'Angular: Animations, Service Workers & Deployment',
        'Angular: Unit Testing'
      ],
      expanded: false
    },
    {
      title: 'Testing and Deployment',
      lessons: [
        'Angular: Review Day 3',
        'GitHub, Version Control & Project Management'
      ],
      expanded: false
    },
    {
      title: 'Project-Based Learning',
      lessons: [
        'Frontend Group Project',
        'JavaScript: Building Real Things',
        'JavaScript: Bookmarking App'
      ],
      expanded: false
    }
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
