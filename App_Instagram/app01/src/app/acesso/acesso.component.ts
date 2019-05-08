import { Component, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.styl'],
  animations: [
    trigger('animacao-banner',[
      state('criado',style({
        opacity:1
      })),
      transition('void=> criado',[
        style({opacity: 0, transform: 'translate(-800px,0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ]),//End Trigger Banner
    trigger('animacao-cadastro',[
      state('criado',style({
        opacity:1
      })),
      transition('void=> criado',[
        style({opacity: 0, transform: 'translate(800px,0)'}),
        animate('500ms 0s ease-in-out', keyframes([
          style({offset: 0.15, opacity: 1, transform: 'translateY(0)'}),
          style({offset: 0.75, opacity: 1, transform: 'translateY(0)'}),
          style({offset: 0.78, opacity: 1, transform: 'translateX(-10px)'}),
          style({offset: 0.82, opacity: 1, transform: 'translateX(10px)'}),
          style({offset: 0.86, opacity: 1, transform: 'translateX(-10px)'}),
          style({offset: 0.88, opacity: 1, transform: 'translateX(10px)'}),
          style({offset: 0.90, opacity: 1, transform: 'translateY(-30px)'}),
          style({offset: 0.92, opacity: 1, transform: 'translateY(30px)'}),
          style({offset: 0.93, opacity: 1, transform: 'translateY(-30px)'}),
          style({offset: 0.94, opacity: 1, transform: 'translateY(30px)'}),
          style({offset: 0.95, opacity: 1, transform: 'translateY(-30px)'}),
          style({offset: 0.96, opacity: 1, transform: 'translateY(30px)'}),
          style({offset: 1, opacity: 1, transform: 'translateY(0)'})
          
        ]))
      ])
    ])//End Trigger Cadastro
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner : string = 'criado'
  public estadoPainel : string = 'criado'
  public cadastro: boolean = false
  constructor() { }

  ngOnInit() {
  }
  public exibirPainel(event: string) : void {
    this.cadastro = event === 'cadastro' ? true:false
  }
}
