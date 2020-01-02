import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Budget } from 'src/app/core/models';
import { BudgetService } from 'src/app/core/services/budget.service';
import { ExpenseService } from 'src/app/core/services/expense.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-budget-cards',
  templateUrl: './budget-cards.component.html',
  styleUrls: ['./budget-cards.component.scss']
})
export class BudgetCardsComponent implements OnInit {
  budgets: Observable<Budget[]>;
  appCurrency = environment.currency;

  constructor(
    private budgetService: BudgetService,
    private expenseService: ExpenseService
  ) {}

  ngOnInit() {
    this.budgets = combineLatest([
      this.budgetService.getBudgetBreakdown(),
      this.expenseService.getExpenses()
    ]).pipe(
      map(([budgets, expenses]) => {
        budgets.forEach(budget => {
          budget.spent = expenses
            .filter(expense => expense.budget.code === budget.code)
            .reduce((prev, current) => {
              prev += current.amount;
              return prev;
            }, 0);
        });
        return budgets;
      })
    );
  }
}
