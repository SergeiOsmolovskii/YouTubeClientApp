import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const APIKey = 'AIzaSyDVx2twub2CorQjaSrE1r6ZI0bsVjcLHyk';
    const URL = 'https://youtube.googleapis.com/youtube/v3';

    return next.handle(
      request.clone({
        url: `${URL}/${request.url}`,
        setParams: {
          key: APIKey,
        },
      })
    );
  }
}
