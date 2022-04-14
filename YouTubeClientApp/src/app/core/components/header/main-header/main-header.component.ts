import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, Observable, tap } from 'rxjs';
import { VideoResponseService } from 'src/app/youtube/services/video-response/video-response.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent implements AfterViewInit {

  @ViewChild('searchWord') public searchWord!: ElementRef<HTMLInputElement>;
  
  public isSettingsVisible = false;
  private word = '';
  private isTyping = false;

  constructor(private videoResponse: VideoResponseService) { }

  ngAfterViewInit(): void {
    const input: HTMLInputElement = this.searchWord.nativeElement;
    const inputVal: Observable<string> = new Observable((observer) => {
      input.oninput = () => observer.next(input.value);
    });
  
    inputVal.pipe(
      tap(() => this.isTyping = true),
      debounceTime(1000),
      tap(() => this.isTyping = false),
    ).subscribe((value) => {
      if (!this.isTyping && value.length > 3) {
        this.word = value;
        this.search();
      }
    });
  }

  toggleSortSettings(): void {
    if (this.isSettingsVisible) {
      this.isSettingsVisible = false;
    } else this.isSettingsVisible = true;
  }

  displaySearchResult(): void {
    this.videoResponse.getResponse(this.word).subscribe(data => {
      this.videoResponse.response = data.items;
      console.log(this.videoResponse.response);
    });
  }
    
  search(): void {
    this.displaySearchResult();  
  }

}