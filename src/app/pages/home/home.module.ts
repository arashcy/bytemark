import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';
import { HomeHeaderComponent } from '../../shared/components/home-navbar/home-header.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('../../shared/components/list-articles/list-articles.module').then(m => m.ListArticlesModule)},
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
