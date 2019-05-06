import { Component, OnInit, } from '@angular/core';
import { style, trigger, state, } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.styl'],
  animations: [
    trigger('banner',[
      state('escondido',style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      }))
    ])
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
