import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LessonBarComponent } from './lesson-bar/lesson-bar.component';
import { LessonQuizComponent } from './lesson-quiz/lesson-quiz.component';
import { LessonTimerComponent } from './lesson-timer/lesson-timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LessonBarComponent, LessonQuizComponent, LessonTimerComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson1';
}
