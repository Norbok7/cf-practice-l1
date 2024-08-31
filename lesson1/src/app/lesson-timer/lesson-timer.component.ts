import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-lesson-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson-timer.component.html',
  styleUrl: './lesson-timer.component.css'
})
export class LessonTimerComponent implements OnInit, OnDestroy {
  @Input() timeLimit: number = 30; // Time limit in seconds
  @Output() timerExpired = new EventEmitter<void>(); // Emit event when timer expires
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
        this.timerExpired.emit(); // Notify parent component that timer expired
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

  getProgressBarBackground(): string {
    return this.timeRemaining <= 10
      ? 'linear-gradient(115deg, #ff0000, #ff5e5e 73%, #ff0000)' // Red gradient
      : 'linear-gradient(115deg, #166534, #15803d 73%, #14532d)'; // Original gradient
  }
}
