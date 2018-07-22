import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

// components
import * as fromComponents from './components';

// containers
import * as fromPages from './pages';



// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromPages.TestComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature( 'test', {} ),
    EffectsModule.forFeature( [] )
  ],
  providers: [
  ],
  declarations: [
    ...fromPages.pages,
    ...fromComponents.components
  ],
  exports: [
    ...fromPages.pages,
    ...fromComponents.components
  ],
})
export class TestModule {}
