import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ErrorPagesModule } from './pages/error-pages/error-pages.module';
import { TravelwakaModule } from './layout/travelwaka/travelwaka.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    TravelwakaModule,
    AppRoutingModule,
    ErrorPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
