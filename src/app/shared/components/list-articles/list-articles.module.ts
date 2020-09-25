import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from './list-articles.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material.module';
import { FormsModule } from '@angular/forms';
import { HomeHeaderComponent } from '../home-navbar/home-header.component';
const routes: Routes = [
    {
      path: '',
      component: ListArticlesComponent,
    },
     {
       path: 'articles/:id', loadChildren: () => import('../view-article/view-article.module').then(m => m.ViewArticleModule)
      },
        {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
        }
  ];
@NgModule({
    imports: [ CommonModule, MaterialModule, FormsModule, RouterModule.forChild(routes)],
    declarations: [ ListArticlesComponent ],
    exports: [ ListArticlesComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ListArticlesModule {}
