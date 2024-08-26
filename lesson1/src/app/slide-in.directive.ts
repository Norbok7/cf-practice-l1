import { Directive, ElementRef, Renderer2, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appSlideIn]',
  standalone: true
})
export class SlideInDirective implements OnInit {

  @Input() slideDirection: 'in' | 'out' = 'in'; // To determine the slide direction
  private animationDuration = 300; // Duration of the slide animation in milliseconds

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.setInitialPosition();
    this.setTransition();
  }

  private setInitialPosition() {
    const translateValue = this.slideDirection === 'in' ? 'translateX(-100%)' : 'translateX(0)';
    this.renderer.setStyle(this.el.nativeElement, 'transform', translateValue);
  }

  private setTransition() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', `transform ${this.animationDuration}ms ease-out`);
  }

  triggerSlide() {
    const targetPosition = this.slideDirection === 'in' ? 'translateX(0)' : 'translateX(100%)';
    this.renderer.setStyle(this.el.nativeElement, 'transform', targetPosition);
  }
}
