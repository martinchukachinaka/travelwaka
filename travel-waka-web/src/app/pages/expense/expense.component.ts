import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { Expense } from 'src/app/core/models';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExpenseService } from 'src/app/core/services/expense.service';
import { environment } from 'src/environments/environment';
import { AddExpenseComponent } from './add-expense/add-expense.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  appCurrency = environment.currency;
  expenses: Observable<Expense[]>;

  constructor(
    private expenseService: ExpenseService,
    private dialog: MatDialog,
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
  }

  callEdit(expense: Expense = new Expense()) {
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '30%',
      data: expense
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(result => {
        if (result && result.id) {
          this.alert.showSuccess('Add successful', 'Expense Setup');
        }
        if (result && result.error) {
          this.alert.showError('Add failed', 'Expense Setup');
        }
      })
    );
  }

  delete(expense) {
    if (
      confirm('You are about to delete an expense. Do you want to continue?')
    ) {
      this.subscription.add(this.expenseService.delete(expense).subscribe());
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
