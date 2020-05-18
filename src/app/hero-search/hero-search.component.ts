import { Component, ViewEncapsulation } from '@angular/core';
import { SEARCH_PROVIDER } from 'ui-widgets';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: SEARCH_PROVIDER, useExisting: HeroService}]
})
export class HeroSearchComponent {

}
