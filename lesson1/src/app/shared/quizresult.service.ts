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
  private currentSectionSubject = new BehaviorSubject<any>(null); // Add this to track the current section

  results$ = this.resultsSubject.asObservable();
  correctCount$ = this.correctCountSubject.asObservable();
  totalQuestions$ = this.totalQuestionsSubject.asObservable();
  previousScores$ = this.previousScoresSubject.asObservable();
  currentSection$ = this.currentSectionSubject.asObservable(); // Expose currentSection as observable

  // Update these methods to work with the BehaviorSubject
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

  // Method to set the current section
  setCurrentSection(section: any) {
    this.currentSectionSubject.next(section);
  }

  // Get the current section
  getCurrentSection() {
    return this.currentSectionSubject.value;
  }

  finalizeQuiz() {
    const score = {
      sectionTitle: this.getCurrentSection()?.title || 'Unknown Section', // Provide default value
      correctCount: this.correctCountSubject.value, // Use subject value directly
      totalQuestions: this.totalQuestionsSubject.value, // Use subject value directly
      date: new Date()
    };
    console.log('Adding previous score:', score); // Debugging
    this.addPreviousScore(score); // Correct this method call
  }
  private saveScoresToLocalStorage(scores: any[]) {
    localStorage.setItem('previousScores', JSON.stringify(scores));
  }

  private loadScoresFromLocalStorage(): any[] {
    const scores = localStorage.getItem('previousScores');
    return scores ? JSON.parse(scores) : [];
  }
}
