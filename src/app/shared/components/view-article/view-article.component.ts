import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {
  article;
  constructor(private router: Router) {
    this.getArticle();
  }

  ngOnInit(): void {
  }
  getArticle(){
    if (this.router.getCurrentNavigation()?.extras?.state) { // Gets article from the router
      this.article = this.router.getCurrentNavigation().extras.state.article;
    }else{
      // this.server.readReport()
    }
  }

}
