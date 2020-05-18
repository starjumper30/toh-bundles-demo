import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroSearchModule } from '../hero-search/hero-search.module';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{path: '', component: DashboardComponent}];

  @NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeroSearchModule
  ]
})
export class DashboardModule { }
