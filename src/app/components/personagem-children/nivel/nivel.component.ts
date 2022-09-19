import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { Personagem } from 'src/app/model/personagem';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {
  @Input() personagem!:Personagem;
  @Output() newItemEvent = new EventEmitter<any>();
  experienciaForm = new FormGroup({})
  obs!:Subscription
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.experienciaForm = this.fb.group({
      nivel:[this.personagem.nivel, [
        Validators.max(300),
        Validators.min(1)
      ]],
      experiencia:[this.personagem.experiencia, [
        Validators.max(100000),
        Validators.min(1000)
      ]],
      hidratacao:[this.personagem.hidratacao, [
        Validators.max(100),
        Validators.min(0)
      ]],
      saciedade:[this.personagem.saciedade, [
        Validators.max(100),
        Validators.min(0)
      ]],
      dinheiro:[this.personagem.dinheiro, [
        Validators.max(100000),
        Validators.min(-100000)
      ]],
    })
    
  }
 
  save(){
    let data = this.experienciaForm.value
    this.newItemEvent.emit(data);
  }
  
  test(){
    this.experienciaForm.patchValue(this.personagem)
  }
  
}
