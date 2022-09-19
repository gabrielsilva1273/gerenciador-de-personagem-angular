import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.scss']
})
export class NomeComponent implements OnInit {
  @Input() personagem!:Personagem;
  constructor() { }

  ngOnInit(): void {
  }

}
