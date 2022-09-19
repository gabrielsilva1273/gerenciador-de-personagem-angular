import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  @Input() personagem!:Personagem;

  constructor() { }

  ngOnInit(): void {
  }

}
