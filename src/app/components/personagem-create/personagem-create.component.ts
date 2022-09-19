import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PersonagemService } from 'src/app/services/personagem.service';

@Component({
  selector: 'app-personagem-create',
  templateUrl: './personagem-create.component.html',
  styleUrls: ['./personagem-create.component.scss']
})
export class PersonagemCreateComponent implements OnInit {
  createPersonagemForm = new FormGroup({});
  loading:boolean = false;

  constructor(private fb: FormBuilder,
    private ps: PersonagemService,
    private rt: Router,
    private sb: MatSnackBar) { }

  ngOnInit(): void {
    this.createPersonagemForm = this.fb.group({
      nome:['',[
        Validators.required,
        Validators.maxLength(20)
      ]],
      idade:['',[
        Validators.required,
        Validators.min(1),
        Validators.max(120)
      ]],
      nacionalidade:['',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]]
    })
  }

  submitData(){
    this.loading = true;
    let body = this.createPersonagemForm.value
    this.ps.create(body).subscribe(
      success => {
        this.openSnackBarWithMessage("Personagem criado com sucesso"),
        this.rt.navigateByUrl('/personagens'),
        this.loading = false;
      },
      error => {
        this.openSnackBarWithMessage(error.error),
        this.loading = false,
        console.log.apply(error.error); 
      });

  }
  openSnackBarWithMessage(message:string){
    this.sb.open(message,'Fechar',{duration:3500})
  }
  close(){
    this.createPersonagemForm.disable
    this.rt.navigateByUrl("personagens")
  }

}
