import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Personagem } from 'src/app/model/personagem';
import { PersonagemService } from 'src/app/services/personagem.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit{
  personagem!:Personagem;
  personagemEdit!:Personagem;
  id!:string;
  personagemExist = false;
  isLoggedIn!:boolean;
  //page logic
  mode!:string;
  hasNextPage!:boolean;
  hasBeforePage!:boolean;
  
  constructor(private rt:Router,
    private ss: SecurityService,
    private ps: PersonagemService,
    private sb: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = this.ss.isLoggedIn()
    if(this.isLoggedIn){
      this.id = this.getId()
      this.mode = 'basic'
      this.hasBeforePage = true;
      this.hasNextPage = true;
      this.ps.readById(this.id).subscribe(
        success => {
          this.personagem = success
        },
        error => {this.returnToPersonagensIfDoesntExist()}
      )}
      
    
      
  }

  getId(){
    const idList = this.rt.url.split('/')
    const id = idList[2]
    return id;
  }

  returnToPersonagensIfDoesntExist(){
      this.rt.navigateByUrl('/personagens')
  }
  refreshNivel($event:any){
    this.personagemEdit = this.personagem
    this.personagemEdit.experiencia = $event.experiencia
    this.personagemEdit.hidratacao = $event.hidratacao
    this.personagemEdit.saciedade = $event.saciedade
    this.personagemEdit.dinheiro = $event.dinheiro
    this.ps.updateById(this.personagemEdit).subscribe(
      success => {this.personagem = success,console.log(success)},
      error => {this.openSnackBarWithMessage("Erro ao salvar personagem",2500)}
    )
  }

  //page logic
  nextPage(){
    switch (this.mode){
      case 'basic':
        this.mode = 'inf'
        this.hasBeforePage = true;
        this.hasNextPage = true;
        break;
      case 'inf':
        this.mode = 'lists'
        this.hasBeforePage = true;
        this.hasNextPage = false;
        break;  
  }
  }

  beforePage()
  {
    switch (this.mode){
      case 'basic':
        this.rt.navigateByUrl('/personagens')
        break;
      case 'inf':
        this.mode = 'basic'
        this.hasBeforePage = true;
        this.hasNextPage = true;
        break; 
      case 'lists':
        this.mode = 'inf'
        this.hasBeforePage = true;
        this.hasNextPage = true;
        break; 
  }
  }
  openSnackBarWithMessage(message:string,durationInMs:number){
    this.sb.open(message,'Fechar',{duration:durationInMs})
  }
}


  
  
  
