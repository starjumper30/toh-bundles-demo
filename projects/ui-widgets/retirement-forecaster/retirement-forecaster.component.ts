import { Component, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'lib-retirement-forecaster',
  templateUrl: './retirement-forecaster.component.html',
  styleUrls: ['./retirement-forecaster.component.css']
})
export class RetirementForecasterComponent {
  private _startDate: Date;
  retirementDate: Date;


  @Input()
  set startDate(start: Date) {
    this._startDate = start;
    this.retirementDate = moment(start).add(20, 'years').toDate();
  }

  get startDate() {
    return this._startDate;
  }

}
