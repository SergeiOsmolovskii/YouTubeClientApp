import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IResponseItem } from '../models/video-response.model';
import { VideoResponseService } from '../services/video-response.service';

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
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid red');
  }
  @Input() 
  set appBorderDependingOnTheDate(publishedAt: string) {

    /* TO FIX */

    if (this.now - new Date(publishedAt).getTime() >= this.now - this.sevenDaysAgo) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid blue');
    } else if (this.now - new Date(publishedAt).getTime() >= this.now - this.monthAgo) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid green');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid red');
    }
  }

  }