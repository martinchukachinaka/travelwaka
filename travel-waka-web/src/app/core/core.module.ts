import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: []
})
export class CoreModule {}
