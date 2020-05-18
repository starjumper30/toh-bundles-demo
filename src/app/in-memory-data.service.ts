import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', hireDate: '1/12/2005' },
      { id: 12, name: 'Narco', hireDate: '5/01/2008' },
      { id: 13, name: 'Bombasto', hireDate: '9/18/2012' },
      { id: 14, name: 'Celeritas', hireDate: '10/22/2018' },
      { id: 15, name: 'Magneta', hireDate: '1/12/2019' },
      { id: 16, name: 'RubberMan', hireDate: '8/02/2006' },
      { id: 17, name: 'Dynama', hireDate: '4/24/2014' },
      { id: 18, name: 'Dr IQ', hireDate: '11/05/2016' },
      { id: 19, name: 'Magma', hireDate: '3/11/2003' },
      { id: 20, name: 'Tornado', hireDate: '6/19/2001' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
