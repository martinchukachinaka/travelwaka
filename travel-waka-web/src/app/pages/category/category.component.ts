import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/core/models';
import { CategoryService } from 'src/app/core/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  categories: Observable<Category[]>;
  subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog,
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  callEdit(category?: Category) {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '30%',
      data: category || new Category()
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      if (result && result.id) {
        this.alert.showSuccess('Save successful', 'Category Setup');
      }
      if (result && result.error) {
        this.alert.showError('Save failed', 'Category Setup');
      }
    });
  }

  delete(cat: Category) {
    this.subscription.add(this.categoryService.deleteCategory(cat).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
