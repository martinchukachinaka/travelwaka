import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/error-pages/not-found/not-found.component';
import { SelectivePreloaderService } from './core/services/selective-preloader.service';
import { TravelwakaComponent } from './layout/travelwaka/travelwaka.component';

const routes: Routes = [
  {
    path: '',
    component: TravelwakaComponent,
    children: [
      {
        path: 'budget',
        loadChildren: () =>
          import('./pages/budget/budget.module').then(mod => mod.BudgetModule)
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./pages/category/category.module').then(
            mod => mod.CategoryModule
          )
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/dash/dash.module').then(mod => mod.DashModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloaderService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
