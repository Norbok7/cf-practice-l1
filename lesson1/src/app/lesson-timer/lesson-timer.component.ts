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
  startTime: number = 0;
  animationFrameId!: number;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.startTime = Date.now();
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.updateProgress();
      } else {
        this.timerSubscription.unsubscribe();
        this.timerExpired.emit(); // Notify parent component that timer expired
      }
    });
  }

  updateProgress() {
    cancelAnimationFrame(this.animationFrameId);
    const duration = (Date.now() - this.startTime) / 1000;
    this.progressWidth = Math.max(0, ((this.timeLimit - duration) / this.timeLimit) * 100);
    this.animationFrameId = requestAnimationFrame(() => this.updateProgress());
  }

  resetTimer() {
    this.timeRemaining = this.timeLimit;
    this.startTime = Date.now();
    this.updateProgress(); // Reset progress bar
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    cancelAnimationFrame(this.animationFrameId);
  }

  getProgressBarBackground(): string {
    return this.timeRemaining <= 10
      ? 'linear-gradient(115deg, rgba(255, 0, 0, 0.25), rgba(255, 94, 94, 0.25) 73%, rgba(255, 0, 0, 0.25))'
      : 'linear-gradient(115deg, #166534, #15803d 73%, #14532d)';
  }

  handleNewQuestion() {
    this.resetTimer();
  }
}
