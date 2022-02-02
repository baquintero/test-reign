import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  /* VARIABLES BOOLEAN */
  showbtn = false;
  private scrollHeight : number = 200

  constructor(
    @Inject(DOCUMENT) private document: Document
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


}
