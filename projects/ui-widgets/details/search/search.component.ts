import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { DetailItem } from '../detail-item';
import { SEARCH_PROVIDER, SearchService } from './search-provider.token';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  implements OnInit {
  items$: Observable<DetailItem[]>;
  private searchTerms = new Subject<string>();

  constructor(@Inject(SEARCH_PROVIDER) private searchSvc: SearchService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchSvc.search(term)),
    );
  }
}
