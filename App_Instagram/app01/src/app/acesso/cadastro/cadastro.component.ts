import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.styl']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login')
  }

}
