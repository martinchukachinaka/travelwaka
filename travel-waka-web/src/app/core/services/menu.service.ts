import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showSidebar: BehaviorSubject<boolean>;
  showSideBarObs: Observable<boolean>;

  constructor() {
    this.showSidebar = new BehaviorSubject(false);
    this.showSideBarObs = this.showSidebar.asObservable();
  }

  setShowSidebar(value) {
    this.showSidebar.next(value);
  }
}
