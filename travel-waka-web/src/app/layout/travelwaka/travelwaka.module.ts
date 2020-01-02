import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { TravelwakaComponent } from './travelwaka.component';

@NgModule({
  declarations: [TravelwakaComponent, MenuComponent],
  imports: [SharedModule],
  exports: [TravelwakaComponent, MenuComponent]
})
export class TravelwakaModule {}
