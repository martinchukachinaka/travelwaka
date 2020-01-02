import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private processing = new BehaviorSubject<boolean>(false);
  processingObs: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.processingObs = this.processing.asObservable();
  }

  save<T>(url: string, payload: any): Observable<T> {
    this.processing.next(true);
    return this.http.post<T>(url, payload).pipe(
      tap(() => this.processing.next(false)),
      catchError((error, caught) => this.handleError(error, caught))
    );
  }

  find<T>(url: string, options: RequestOptions = {}): Observable<T> {
    this.processing.next(true);
    return this.http.get<T>(url, options).pipe(
      tap(() => this.processing.next(false)),
      catchError((error, caught) => this.handleError(error, caught))
    );
  }

  findText(url: string): Observable<string> {
    this.processing.next(true);
    return this.http.get(url, { responseType: 'text' }).pipe(
      tap(() => this.processing.next(false)),
      catchError((error, caught) => this.handleError(error, caught))
    );
  }

  delete<T>(url: string): Observable<T> {
    this.processing.next(true);
    return this.http.delete<any>(url).pipe(
      tap(() => this.processing.next(false)),
      catchError((error, caught) => this.handleError(error, caught))
    );
  }

  post<T>(url, data?: any): Observable<T> {
    return this.save<T>(url, data);
  }

  put<T>(url, data?: any): Observable<T> {
    this.processing.next(true);
    return this.http.put<T>(url, data).pipe(
      tap(() => this.processing.next(false)),
      catchError((error, caught) => this.handleError(error, caught))
    );
  }

  handleError(error, caught) {
    this.processing.next(false);
    return throwError(error);
  }
}

export interface RequestOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
