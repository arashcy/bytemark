import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewArticleComponent } from './view-article.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material.module';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    {
      path: '',
      component: ViewArticleComponent
    }
  ];
@NgModule({
    imports: [ CommonModule, MaterialModule, FormsModule, RouterModule.forChild(routes)],
    declarations: [ ViewArticleComponent ],
    exports: [ ViewArticleComponent ],
    schemas: []
})

export class ViewArticleModule {}
