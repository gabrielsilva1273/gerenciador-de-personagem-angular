import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem';

@Component({
  selector: 'app-talentos',
  templateUrl: './talentos.component.html',
  styleUrls: ['./talentos.component.scss']
})
export class TalentosComponent implements OnInit {
  @Input() personagem!:Personagem;

  constructor() { }

  ngOnInit(): void {
  }

}
