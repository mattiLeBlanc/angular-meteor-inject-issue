import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppComponent } from './app.component';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  {
    path: 'test',
    loadChildren: '../feature/test.module#TestModule',
  },
];

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];

@NgModule( {
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( ROUTES ),
    StoreModule.forRoot( {}, { metaReducers } ),
    EffectsModule.forRoot( [] ),
    StoreRouterConnectingModule,
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
