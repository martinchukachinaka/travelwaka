import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BudgetService } from 'src/app/core/services/budget.service';
import { ExpenseService } from 'src/app/core/services/expense.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent implements OnInit {
  total: Observable<any>;
  appCurrency = environment.currency;

  constructor(
    private budgetService: BudgetService,
    private expenseService: ExpenseService
  ) {}

  ngOnInit() {
    this.total = combineLatest([
      this.budgetService.totalBudget,
      this.expenseService.totalExpense
    ]).pipe(map(([budget, expense]) => ({ budget, expense })));
  }
}
