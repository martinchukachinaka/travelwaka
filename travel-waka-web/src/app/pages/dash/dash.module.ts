import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashComponent } from './dash.component';
import { ExpenseModule } from '../expense/expense.module';
import { BudgetCardsComponent } from './budget-cards/budget-cards.component';
import { ExpenseCardComponent } from './expense-card/expense-card.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  }
];

@NgModule({
  declarations: [DashComponent, BudgetCardsComponent, ExpenseCardComponent],
  imports: [SharedModule, ExpenseModule, RouterModule.forChild(routes)]
})
export class DashModule {}
