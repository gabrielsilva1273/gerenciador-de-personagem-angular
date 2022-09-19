import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {
  @Input() personagem!:Personagem;

  constructor() { }

  ngOnInit(): void {
  }

}
