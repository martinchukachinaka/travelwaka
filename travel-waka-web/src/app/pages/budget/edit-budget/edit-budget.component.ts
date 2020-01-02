import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from 'src/app/core/services/budget.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget, Category } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.scss']
})
export class EditBudgetComponent implements OnInit {
  form: FormGroup;
  categories: Observable<Category[]>;

  constructor(
    private fb: FormBuilder,
    private budgetService: BudgetService,
    private catService: CategoryService,
    public dialogRef: MatDialogRef<EditBudgetComponent>,
    @Inject(MAT_DIALOG_DATA) public budget: Budget
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: this.budget.id,
      creationDate: this.budget.creationDate || new Date().toISOString(),
      code: [this.budget.code, Validators.required],
      category: [this.budget.category, Validators.required],
      amount: [this.budget.amount, [Validators.required]],
      description: [this.budget.description]
    });
    this.categories = this.catService.getCategories();
  }

  submit() {
    if (this.form.valid) {
      this.budgetService.saveBudget(this.form.value).subscribe(
        result => this.dialogRef.close(result),
        error => this.dialogRef.close(error)
      );
    }
  }
}
