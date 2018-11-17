import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// Custom Module
import { ProductModule } from './product/product.module';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from './store/app-reducer';
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ProductModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
