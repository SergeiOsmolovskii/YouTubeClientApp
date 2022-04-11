import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { colors } from '../services/constants';
@Directive({
  selector: '[appBorderDependingOnTheDate]'
})

export class BorderDependingOnTheDateDirective {
  private now = new Date().getTime();
  private milisecondsInSecondInDay = 86400000;
  private daysInMonth = 30;
  private monthInHalfYear = 6;
  private daysInWeek = 7; 
  private sevenDaysAgo = new Date(this.now - (this.daysInWeek * this.milisecondsInSecondInDay)).getTime();
  private monthAgo = new Date(this.now - (this.daysInMonth * this.milisecondsInSecondInDay)).getTime();
  private sixMonthAgo = new Date(this.now - (this.monthInHalfYear * this.daysInMonth * this.milisecondsInSecondInDay)).getTime();
  private borderStyleType = 'border-bottom';
  private borderSizeAndType = '5px solid';
  
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  set appBorderDependingOnTheDate(publishedAt: string) {
    const publishedAtDate = new Date(publishedAt).getTime();

    if (publishedAtDate - this.sixMonthAgo < 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, this.borderStyleType, `${this.borderSizeAndType} ${colors.redColor}`);
    } else if (publishedAtDate - this.sevenDaysAgo > 0 && publishedAtDate - this.monthAgo > 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, this.borderStyleType, `${this.borderSizeAndType} ${colors.blueColor}`);
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, this.borderStyleType, `${this.borderSizeAndType} ${colors.greenColor}`);
    }
  }

}