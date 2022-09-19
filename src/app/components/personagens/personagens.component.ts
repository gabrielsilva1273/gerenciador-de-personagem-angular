import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { Personagem } from 'src/app/model/personagem';
import { PersonagemService } from 'src/app/services/personagem.service';
import { SecurityService } from 'src/app/services/security.service';
import { Slice } from 'src/app/model/slice';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {
  isLoggedIn!: boolean;
  isHoveringDeleteButton!: boolean;
  //personagens
  personagemForm = new FormGroup({})
  name!:string;
  personagens!:Array<Personagem>
  obs!:Subscription
  //navigation page
  hasPrevious!: boolean;
  hasNext!: boolean;
  currentPage!: number;
  //delete
  deletePersonagemBool!:boolean;


  constructor(private ss: SecurityService,
    private ps: PersonagemService,
    private fb: FormBuilder,
    private rt: Router,
    private sb: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = this.ss.isLoggedIn();
    
    if(this.isLoggedIn){
      this.personagemForm = this.fb.group({
        personagem:['', [
          Validators.maxLength(50)
        ]]})
  
      this.noSearchInitialization()
      this.obs=this.personagemForm.valueChanges.pipe(
        debounceTime(1000)).subscribe(data => this.personagensFromDebounceText(data.personagem))
      }
  }

  logOut() {
    this.ss.logout();
  }

  personagensFromDebounceText(name:string){
    this.currentPage = 0
    if(name ===''){
      this.ps.readAll().subscribe(
        success => { this.populateVariables(success)},
        error => console.log(error)
      )
    }else{
      this.ps.readAllByName(name).subscribe(
        success => { this.populateVariables(success)},
        error => console.log(error))
      }
  }

  noSearchInitialization(){
    this.ps.readAll().subscribe(
      success => { this.populateVariables(success)},
      error => console.log(error)
    )
  }

  populateVariables(data: Slice) {
    this.currentPage = data.pageNumber
    this.personagens = data.personagens
    this.hasNext = data.hasNext
    this.hasPrevious = data.hasPrevious
  }
  
  
  navigateBeforePage() {
    const beforePage = this.currentPage - 1;
    this.ps.readAllWithPageNumber(beforePage).subscribe(
      success => { this.populateVariables(success)},
      error => console.log(error)
    )

  }

  navigateNextPage() {
    const nextpage = this.currentPage + 1;
    this.ps.readAllWithPageNumber(nextpage).subscribe(
      success => { this.populateVariables(success)},
      error => console.log(error)
    )
  }

  deletePersonagem(id:any){

    this.ps.deleteById(id).subscribe(
      success => {this.noSearchInitialization(),
        this.openSnackBarWithMessage("Personagem excluido com sucesso",2000)},
      error => {this.noSearchInitialization(),
        this.openSnackBarWithMessage("Personagem excluido com sucesso",2000)}
      )
  }

  overDelete(){
    this.isHoveringDeleteButton = true;
  }

  outDelete(){
    this.isHoveringDeleteButton = false;
  }

  routeToPersonagem(id:any){
    if(this.isHoveringDeleteButton){

    }else{
      this.rt.navigateByUrl('/personagens/'+id)
    }
  }

  openSnackBarWithMessage(message:string,durationInMs:number){
    this.sb.open(message,'Fechar',{duration:durationInMs})
  }

  getImage(personagem:any){
    const id = personagem.id;
    const img = localStorage.getItem(id)
    return img;
  }

}
