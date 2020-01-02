import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Budget } from 'src/app/core/models';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/core/services/alert.service';
import { EditBudgetComponent } from './edit-budget/edit-budget.component';
import { BudgetService } from 'src/app/core/services/budget.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit, OnDestroy {
  budgetList: Observable<Budget[]>;
  subscription = new Subscription();
  appCurrency = environment.currency;

  constructor(
    private budgetService: BudgetService,
    private dialog: MatDialog,
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.budgetList = this.budgetService.getBudgetBreakdown();
  }

  callEdit(budget?: Budget) {
    const dialogRef = this.dialog.open(EditBudgetComponent, {
      width: '30%',
      data: budget || new Budget()
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      if (result && result.id) {
        this.alert.showSuccess('Save successful', 'Budget Setup');
      }
      if (result && result.error) {
        this.alert.showError('Save failed', 'Budget Setup');
      }
    });
  }

  delete(cat: Budget) {
    this.subscription.add(this.budgetService.deleteBudget(cat).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
