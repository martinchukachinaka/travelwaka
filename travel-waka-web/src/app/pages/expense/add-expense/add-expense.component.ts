import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget, Expense } from 'src/app/core/models';
import { BudgetService } from 'src/app/core/services/budget.service';
import { ExpenseService } from 'src/app/core/services/expense.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import dayjs from 'dayjs';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  form: FormGroup;
  budgets: Observable<Budget[]>;

  constructor(
    private fb: FormBuilder,
    private budgetService: BudgetService,
    private expenseService: ExpenseService,
    public dialogRef: MatDialogRef<AddExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public expense: Expense
  ) {}

  ngOnInit() {
    let creationDate = dayjs().format('YYYY-MM-DD');
    if (this.expense.creationDate) {
      creationDate = dayjs(this.expense.creationDate).format('YYYY-MM-DD');
    }

    this.form = this.fb.group({
      id: this.expense.id,
      budget: this.expense.budget,
      creationDate: [creationDate, Validators.required],
      amount: [this.expense.amount, Validators.required],
      gist: [this.expense.gist, Validators.required],
      blame: [this.expense.blame || `Mimi's fault`]
    });
    this.budgets = this.budgetService.getBudgetBreakdown();
  }

  submit() {
    if (this.form.valid) {
      this.expenseService
        .saveExpense({
          ...this.form.value,
          code: `${Date.now()}`,
          description: this.form.value.gist
        })
        .subscribe(
          result => this.dialogRef.close(result),
          error => this.dialogRef.close(error)
        );
    }
  }

  compareFn(budget1: Budget, budget2: Budget) {
    return budget1 && budget2 ? budget1.id === budget2.id : budget1 === budget2;
  }
}
