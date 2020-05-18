import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailListTileComponent } from './detail-list-tile/detail-list-tile.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [DetailListTileComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DetailListTileComponent, SearchComponent]
})
export class DetailsModule { }
