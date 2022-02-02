import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ApiUrlPublishedService } from '../../services/api-urlPublished.service';
import { publish, storage } from '../../interfaces/published.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* VARIABLES */
  showbtn = false;
  countPage = 0;
  lengthPublish = 20;
  btnShow = 0
  chooseFramework = {
      title:'Select your news',
      img: 'none'};

  private scrollHeight : number = 200
  public  dataNews: Array<publish> = []
  public  dataStorage: Array<storage> = []
  public dataFavorite: Array<publish> = []

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _news : ApiUrlPublishedService
  ) { }

  ngOnInit(): void {

  }

  /* Method to know if the user scrolls */
  @HostListener('window:scroll')
  onWindowScroll(): void {

    const yOffSet = window.pageXOffset;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showbtn = (yOffSet || scrollTop) > this.scrollHeight;
  }

  /* Method to comeback up page */
  onScrollTop(): void{

    this.document.documentElement.scrollTop = 0;
  }


  /* Load the news */
  onLoadData(framework:string, idPage:string):void{

    if(this.chooseFramework?.title != framework){
      this.chooseFramework = {
        title: framework,
        img: framework
      };

      /* Empty Arrays Data */
      this.dataNews = []
      this.dataFavorite = []

      /* Build the favorites news */
      let data = JSON.parse(localStorage.getItem(framework));
      if(data!=null){
        for(let i in data){
          if(data[i].like){
            this.dataFavorite.push(data[i])
          }
        }
      }
    }

    let tecnology =  localStorage.getItem(framework)

    if((tecnology != null) && (this.dataNews.length < this.lengthPublish) ){
      this.dataNews = JSON.parse(localStorage.getItem(framework))
    }else{
      this._news.getNews(framework, idPage).subscribe(
        Response => {
          console.log(Response)
          this.buildData(Response.body, framework)
        },
        Error => {
          console.error(Error);
        }
      )
    }


  }

  /* Build the data news */
  buildData(data:any, framework: string){
    let news = data.hits;

    for( let index in news){
      let date        = news[index].created_at;
      let titleNews   = news[index].title;
      let authorNews  = news[index].author;
      let urlNews     = news[index].url;

      if((date != null) && (titleNews != null) &&
         (authorNews != null) && (urlNews != null)){
            this.dataNews.push({
              author: authorNews,
              story_title: titleNews,
              story_url: urlNews,
              created_ad: date,
              like: false
            });
        };
    };

    console.log(data.nbPages)
    console.log(this.countPage)
    if((this.dataNews.length < this.lengthPublish) && (this.countPage+1 < data.nbPages)){
      this.countPage = data.page + 1;
      this.onLoadData(this.chooseFramework.title, this.countPage.toString());
    }else{
      console.log(this.dataNews)

      localStorage.setItem(framework,JSON.stringify(this.dataNews))
    }
  }

  /* On Favorite News */
  likes(likePublish:boolean, index:any, framework:string){
    this.dataNews[index].like = likePublish
    localStorage.setItem(framework,JSON.stringify(this.dataNews))
  }

  /* Show the all news or favorite news */
  showNews(flag: boolean, framework: string){
    if(flag){
      this.btnShow = 0;
    }else{
      this.btnShow = 1;
      this.dataFavorite = []
      let data = JSON.parse(localStorage.getItem(framework));
      for(let i in data){
        if(data[i].like){
          this.dataFavorite.push(data[i])
        }
      }
    }
  }

}
