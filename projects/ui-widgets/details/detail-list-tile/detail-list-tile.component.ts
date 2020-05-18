import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DetailItem } from '../detail-item';

@Component({
  selector: 'lib-detail-list-tile',
  templateUrl: './detail-list-tile.component.html'
})
export class DetailListTileComponent {

  @Input() item: DetailItem;

  @Output() delete = new EventEmitter<DetailItem>();

}
