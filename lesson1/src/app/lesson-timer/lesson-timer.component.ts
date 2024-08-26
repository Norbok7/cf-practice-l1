import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-lesson-timer',
  standalone: true,
  imports: [],
  templateUrl: './lesson-timer.component.html',
  styleUrl: './lesson-timer.component.css'
})
export class LessonTimerComponent implements OnInit, OnDestroy {
  @Input() timeLimit: number = 30; // Time limit in seconds
  timeRemaining: number = this.timeLimit;
  timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.timerSubscription.unsubscribe();
        // Handle timer expiration
      }
    });
  }

  resetTimer() {
    this.timeRemaining = this.timeLimit;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
