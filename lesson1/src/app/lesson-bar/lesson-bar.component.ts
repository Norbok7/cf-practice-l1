import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lesson-bar.component.html',
  styleUrl: './lesson-bar.component.css'
})
export class LessonBarComponent {
  lessons = [
    { number: 1, date: new Date('2024-09-01') },
    { number: 2, date: new Date('2024-09-02') },
    // Add more lessons here
  ];

  // Function to handle lesson selection
  onSelectLesson(lesson: any) {
    console.log('Selected Lesson:', lesson);
    // Implement navigation to the selected lesson
  }
}
