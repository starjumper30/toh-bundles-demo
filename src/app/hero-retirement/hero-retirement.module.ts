import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RetirementModule } from 'ui-widgets';

import { HeroRetirementComponent } from './hero-retirement.component';

const routes: Routes = [{path: '', component: HeroRetirementComponent}]

@NgModule({
  declarations: [HeroRetirementComponent],
  imports: [
    CommonModule,
    RetirementModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroRetirementModule { }
