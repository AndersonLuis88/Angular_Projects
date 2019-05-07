import { Component, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';

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
        animate('500ms 0s ease-in-out')
      ])
    ])//End Trigger Cadastro
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner : string = 'criado'
  public cadastro: boolean = false
  constructor() { }

  ngOnInit() {
  }
  public exibirPainel(event: string) : void {
    this.cadastro = event === 'cadastro' ? true:false
  }

}
