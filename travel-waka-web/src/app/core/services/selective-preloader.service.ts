import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloaderService implements PreloadingStrategy {
  preload(route: Route, loader: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? loader() : of(null);
  }
}
