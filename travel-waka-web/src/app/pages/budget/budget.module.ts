import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetComponent } from './budget.component';
import { EditBudgetComponent } from './edit-budget/edit-budget.component';

const routes: Routes = [{ path: '', component: BudgetComponent }];

@NgModule({
  declarations: [BudgetComponent, EditBudgetComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  entryComponents: [EditBudgetComponent]
})
export class BudgetModule {}
