import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExpenseComponent, AddExpenseComponent],
  imports: [SharedModule],
  exports: [ExpenseComponent, AddExpenseComponent],
  entryComponents: [AddExpenseComponent]
})
export class ExpenseModule {}
