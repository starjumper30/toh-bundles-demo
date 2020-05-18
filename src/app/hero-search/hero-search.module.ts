import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModule } from 'ui-widgets';

import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  declarations: [HeroSearchComponent],
  imports: [
    CommonModule,
    DetailsModule
  ],
  exports: [
    HeroSearchComponent
  ]
})
export class HeroSearchModule { }
