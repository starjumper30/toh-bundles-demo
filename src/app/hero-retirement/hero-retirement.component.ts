import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, share, shareReplay, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-retirement',
  templateUrl: './hero-retirement.component.html'
})
export class HeroRetirementComponent {
  hero: Observable<Hero>;
  startDate: Observable<Date>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.hero = this.route.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        switchMap(id => this.heroService.getHero(id)),
        share()
      );

    this.startDate = this.hero.pipe(map(hero => new Date(hero.hireDate)));
  }

  goBack(): void {
    this.location.back();
  }
}
