import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem';

@Component({
  selector: 'app-pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.scss']
})
export class PericiasComponent implements OnInit {
  @Input() personagem!:Personagem;
  nome = this.personagem.nome

  constructor() { }

  ngOnInit(): void {
    
  }

}
