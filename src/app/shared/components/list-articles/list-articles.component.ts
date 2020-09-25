import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit, OnDestroy{

  title = 'Bytemark';
  news;
  newsSub: Subscription;

  constructor(private router: Router, private httpService: HttpService){
    this.getNews();
  }
ngOnInit(){

}
  getNews(){ // Gets news specific to india
    this.newsSub = this.httpService.getNews().subscribe((res: any) => {
      this.news = res.articles;
    });
  }
  openArticle(article){ // Routes to selected article and passes the article information to the component
    this.router.navigateByUrl(`/articles/${article.title}}`, {state: {article}});

  }
  ngOnDestroy(){
    this.newsSub.unsubscribe();
  }
}
