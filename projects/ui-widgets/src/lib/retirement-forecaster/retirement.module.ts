import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetirementForecasterComponent } from './retirement-forecaster.component';

@NgModule({
  declarations: [RetirementForecasterComponent],
  imports: [
    CommonModule
  ],
  exports: [RetirementForecasterComponent]
})
export class RetirementModule { }
