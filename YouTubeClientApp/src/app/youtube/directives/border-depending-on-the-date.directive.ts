import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderDependingOnTheDate]'
})
export class BorderDependingOnTheDateDirective {
  private now = new Date().getTime();
  private sevenDaysAgo = new Date(this.now - (7 * 24 * 60 * 60 * 1000)).getTime();
  private monthAgo = new Date(this.now - (30 * 24 * 60 * 60 * 1000)).getTime();
  private sixMonthAgo = new Date(this.now - (6 * 30 * 24 * 60 * 60 * 1000)).getTime();
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  @Input()
  set appBorderDependingOnTheDate(publishedAt: string) {
    const publishedAtDate = new Date(publishedAt).getTime();

    if (publishedAtDate - this.sixMonthAgo < 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid #2F80ED');
    } else if (publishedAtDate - this.sevenDaysAgo > 0 && publishedAtDate - this.monthAgo > 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid #EB5757');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid #27AE60');
    }
  }

}