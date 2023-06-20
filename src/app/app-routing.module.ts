import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'page-one',
    loadChildren: () => import('./pages/page-one/page-one.module').then( m => m.PageOnePageModule),
    data: { noReuse: true }
  },
  {
    path: 'page-one/:param',
    loadChildren: () => import('./pages/page-one/page-one.module').then( m => m.PageOnePageModule),
    data: { noReuse: true }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
