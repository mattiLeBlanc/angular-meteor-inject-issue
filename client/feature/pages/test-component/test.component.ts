import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';

import { Store } from '@ngrx/store';



@Component({
  selector: 'search',
  changeDetection: ChangeDetectionStrategy.OnPush, // turn this off if you want everything handled by NGRX. No watches. NgModel wont work
  template: `
   <div>Search</div>
  `,
})

export class TestComponent implements OnInit {

  constructor(
    @Inject( Store) private store: Store<any>,
    // private store: Store<any>,
  ) {}

  ngOnInit() {

  }





}
