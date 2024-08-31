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
  progressWidth: number = 100; // Initialize progress width to full
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
      ? 'linear-gradient(115deg, rgba(255, 0, 0, 0.25), rgba(255, 94, 94, 0.25) 73%, rgba(255, 0, 0, 0.25))' // Updated red gradient with 25% opacity
      : 'linear-gradient(115deg, #166534, #15803d 73%, #14532d)'; // Original gradient
  }

  updateProgress() {
    this.progressWidth = (this.timeRemaining / this.timeLimit) * 100;
  }

  // Call this method when a new question is presented
  handleNewQuestion() {
    this.animateProgressBar();
    this.resetTimer();
  }

  private animateProgressBar() {
    this.progressWidth = 0; // Start with empty progress
    setTimeout(() => {
      this.progressWidth = 100; // Fill the progress bar
    }, 0); // Start animation immediately
  }
}
