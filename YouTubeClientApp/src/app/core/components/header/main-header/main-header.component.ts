import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, Observable, tap } from 'rxjs';
import { VideoResponseService } from 'src/app/youtube/services/video-response/video-response.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent {

  @ViewChild('searchWord') public searchWord!: ElementRef<HTMLInputElement>;
  
  public isSettingsVisible = false;
  private word = '';
  private isTyping = false;

  constructor(private videoResponse: VideoResponseService) { }

  public ngAfterViewInit(): void {
    const input: HTMLInputElement = this.searchWord.nativeElement;

    const inputVal: Observable<string> = new Observable((observer) => {
      input.oninput = () => observer.next(input.value);
    });
  
    inputVal.pipe(
      tap(() => this.isTyping = true),
      debounceTime(1000),
      tap(() => this.isTyping = false),
    ).subscribe((value) => {
      if (!this.isTyping) {
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
      this.videoResponse.response = data.items
      this.videoResponse.response.map(item => this.videoResponse.IDArr.push(item.id.videoId));
      this.videoResponse.getStatic().subscribe(data => {
        this.videoResponse.static = data.items;
        this.videoResponse.response.forEach((element, index) => {
          element.statistics = this.videoResponse.static[index].statistics;
        });
      });
    });
  }
    
  search(): void {
    this.displaySearchResult();  
  }

}