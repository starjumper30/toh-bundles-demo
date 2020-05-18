import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsModule } from 'ui-widgets';

import { HeroesComponent } from './heroes.component';

const routes: Routes = [{path: '', component: HeroesComponent}];

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DetailsModule
  ]
})
export class HeroesModule { }
