import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { APP_URL } from './constants';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesSubject = new BehaviorSubject<Category[]>(null);
  categories = this.categoriesSubject.asObservable();

  constructor(private api: ApiService) {}

  getCategories(): import('rxjs').Observable<import('../models').Category[]> {
    return this.api.find<Category[]>(APP_URL.CATEGORIES).pipe(
      switchMap(categories => {
        this.categoriesSubject.next(categories);
        return this.categories;
      })
    );
  }

  saveCategory(category: Category) {
    return this.api
      .save(APP_URL.CATEGORIES, category)
      .pipe(switchMap(() => this.getCategories()));
  }

  deleteCategory(category: Category) {
    return this.api
      .delete(`${APP_URL.CATEGORIES}/${category.code}`)
      .pipe(switchMap(() => this.getCategories()));
  }
}
