import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [SharedModule]
})
export class ErrorPagesModule {}
