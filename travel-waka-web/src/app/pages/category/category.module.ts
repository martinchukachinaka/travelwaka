import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const catRoutes: Routes = [{ path: '', component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent, EditCategoryComponent],
  imports: [SharedModule, RouterModule.forChild(catRoutes)],
  entryComponents: [EditCategoryComponent]
})
export class CategoryModule {}
