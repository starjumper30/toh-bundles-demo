import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DetailItem } from '../detail-item';

export interface SearchService {
  search(term: string): Observable<DetailItem[]>;
}

export const SEARCH_PROVIDER = new InjectionToken<SearchService>('Detail Search Provider');
