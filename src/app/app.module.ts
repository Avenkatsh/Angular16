import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PrpertyBindingComponent } from './component/prperty-binding/prperty-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PrpertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
