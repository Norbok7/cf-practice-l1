import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizresultService {
  private resultsSubject = new BehaviorSubject<any[]>([]);
  private correctCountSubject = new BehaviorSubject<number>(0);
  private totalQuestionsSubject = new BehaviorSubject<number>(0);
  private previousScoresSubject = new BehaviorSubject<any[]>([]);

  results$ = this.resultsSubject.asObservable();
  correctCount$ = this.correctCountSubject.asObservable();
  totalQuestions$ = this.totalQuestionsSubject.asObservable();
  previousScores$ = this.previousScoresSubject.asObservable();

  updateResults(results: any[]) {
    this.resultsSubject.next(results);
  }

  updateCorrectCount(count: number) {
    this.correctCountSubject.next(count);
  }

  updateTotalQuestions(count: number) {
    this.totalQuestionsSubject.next(count);
  }

  updatePreviousScores(scores: any[]) {
    this.previousScoresSubject.next(scores);
  }

  addPreviousScore(score: any) {
    const currentScores = this.previousScoresSubject.value;
    this.previousScoresSubject.next([...currentScores, score]);
  }
}
