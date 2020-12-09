import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptAModule } from './opt-a-ng-content-for-children/opt-a.module';
import { OptBModule } from './opt-b-content-children-with-template-outlet/opt-b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    OptAModule,
    OptBModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {}
