import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Budget } from '../models';
import { ApiService } from './api.service';
import { APP_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgetSubject = new BehaviorSubject<Budget[]>(null);
  budgets = this.budgetSubject.asObservable();
  totalBudgetSubject = new BehaviorSubject<number>(null);
  totalBudget = this.totalBudgetSubject.asObservable();

  constructor(private api: ApiService) {}

  getBudgetBreakdown(): import('rxjs').Observable<Budget[]> {
    return this.api.find<Budget[]>(APP_URL.BUDGET).pipe(
      switchMap(categories => {
        this.budgetSubject.next(categories);
        return this.budgets;
      }),
      tap(budgets => this.calculateTotalBudget(budgets))
    );
  }

  calculateTotalBudget(budgets) {
    const total = budgets.reduce((prev, current) => {
      prev += current.amount;
      return prev;
    }, 0);

    this.totalBudgetSubject.next(total);
  }

  saveBudget(budget: Budget) {
    return this.api
      .save(APP_URL.BUDGET, budget)
      .pipe(switchMap(() => this.getBudgetBreakdown()));
  }

  deleteBudget(budget: Budget) {
    return this.api
      .delete(`${APP_URL.BUDGET}/${budget.code}`)
      .pipe(switchMap(() => this.getBudgetBreakdown()));
  }
}
