import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { LoaderModule } from './loading/loader.module';
import { NotAvailableComponent } from './not-available/not-available.component';
import { TimeagoPipe } from './pipes/timeago.pipe';

@NgModule({
  declarations: [
    TimeagoPipe,
    NotAvailableComponent,
    EmptyStateComponent,
  ],
  imports: [CommonModule, RouterModule, CustomMaterialModule, LoaderModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CustomMaterialModule,
    TimeagoPipe,
    NotAvailableComponent,
    LoaderModule,
    EmptyStateComponent,
  ]
})
export class SharedModule {}
