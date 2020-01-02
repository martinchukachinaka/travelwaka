import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Expense, Budget } from '../models';
import { ApiService } from './api.service';
import { APP_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expensesSubject = new BehaviorSubject<Expense[]>(null);
  expenses = this.expensesSubject.asObservable();
  totalExpenseSubject = new BehaviorSubject<Expense>(null);
  totalExpense = this.totalExpenseSubject.asObservable();

  constructor(private api: ApiService) {}

  getExpenses(): import('rxjs').Observable<import('../models').Expense[]> {
    return this.api.find<Expense[]>(APP_URL.EXPENSES).pipe(
      switchMap(expenses => {
        this.expensesSubject.next(expenses);
        return this.expenses;
      }),
      tap(expenses => this.calculateTotalExpense(expenses))
    );
  }

  calculateTotalExpense(expenses) {
    const total = expenses.reduce((prev, current) => {
      prev += current.amount;
      return prev;
    }, 0);

    this.totalExpenseSubject.next(total);
  }

  saveExpense(expense: Expense) {
    return this.api
      .save(APP_URL.EXPENSES, expense)
      .pipe(switchMap(() => this.getExpenses()));
  }

  delete(expense: any) {
    return this.api
      .delete(`${APP_URL.EXPENSES}/${expense.id}`)
      .pipe(switchMap(() => this.getExpenses()));
  }
}
