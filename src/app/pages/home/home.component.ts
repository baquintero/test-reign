import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ApiUrlPublishedService } from '../../services/api-urlPublished.service';
import { publish, storage } from '../../interfaces/published.interface';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* VARIABLES */
  showbtn = false;
  showToast = false;
  showLoading = false;
  infinityScroll = false;
  maxPage = 50;
  countPage = 0;
  lengthPublish = 20;
  btnShow = 0;
  durationInSeconds = 5;
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

  ngOnInit(): void {}

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

  onScrollDown(framework:string):void{
    this.infinityScroll = false;
    this.lengthPublish += 20;
    this.countPage+=1;

    if(this.countPage >= this.maxPage){
      this.infinityScroll = true;
      this.showToast =  true;
    }else{
      this._news.getNews(framework, this.countPage.toString()).subscribe(
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

  /* Load the news */
  onLoadData(framework:string, idPage:string):void{
    this.showLoading = true

    if(this.chooseFramework?.title != framework){
      this.chooseFramework = {
        title: framework,
        img: framework
      };

      /* Empty Arrays Data */
      this.dataNews = []
      this.dataFavorite = []
      this.countPage = 0
      this.showToast = false

      /* Build the favorites news */
      let data = JSON.parse(localStorage.getItem(framework));
      if(data!=null){
        this.showLoading = false;
        for(let i in data){
          if(data[i].like){
            this.dataFavorite.push(data[i])
          }
        }
      }
    }

    let tecnology =  localStorage.getItem(framework)

    if((tecnology != null) && (this.dataNews.length > this.lengthPublish) && (this.infinityScroll)){
      this.dataNews = JSON.parse(localStorage.getItem(framework))
      this.showLoading = false;
    }else{
      this._news.getNews(framework, idPage).subscribe(
        Response => {
          console.log(Response);
          this.maxPage = Response.body.nbPages;
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

    if((this.dataNews.length < this.lengthPublish) && (this.countPage+1 < data.nbPages)){
      this.countPage = data.page + 1;
      this.onLoadData(this.chooseFramework.title, this.countPage.toString());
    }else{
      console.log(this.dataNews)
      this.showLoading = false;
      localStorage.setItem(framework,JSON.stringify(this.dataNews))
      this.infinityScroll = true;
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

  /* Method date */
  getDay(date: Date){
    let day = new Date(date).getDate()
    return day
  }

  getMonth(date: Date){
    let month = new Date(date).getMonth()

    if(month==0){ return 'january' }
    if(month==1){ return 'february' }
    if(month==2){ return 'march' }
    if(month==3){ return 'april' }
    if(month==4){ return 'may' }
    if(month==5){ return 'june' }
    if(month==6){ return 'july' }
    if(month==7){ return 'august' }
    if(month==8){ return 'september' }
    if(month==9){ return 'octpber' }
    if(month==10){ return 'november' }
    if(month==11){  return 'december' }
  }


}
