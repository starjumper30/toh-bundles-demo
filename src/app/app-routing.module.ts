import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(e => e.DashboardModule) },
  { path: 'detail/:id', loadChildren: () => import('./hero-detail/hero-detail.module').then(e => e.HeroDetailModule) },
  {
    path: 'retirement/:id',
    loadChildren: () => import('./hero-retirement/hero-retirement.module').then(e => e.HeroRetirementModule)
  },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(e => e.HeroesModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
