import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({})
  loading:boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private ss: SecurityService,
    private rt: Router,
    private sb: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[
        Validators.required,
        Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(1000)
      ]]
    })
  }

  submitData(){    
    this.loading = true; 
    let body = this.loginForm.value
    this.ss.login(body).subscribe(
      success => {
        this.ss.setSession(success.jwt,success.expiresAt),
        this.rt.navigateByUrl('/personagens')
      },
      error => {
        this.openSnackBarWithMessage(error.error),
        this.loading = false; 
      });
    
  }

  routeRegistrar(){
    this.loginForm.disable
    this.rt.navigateByUrl("auth/registrar")
  }
    
  openSnackBarWithMessage(message:string){
    this.sb.open(message,'Fechar',{duration:3500})
  }
  getEmail(){
    return this.loginForm.get('email')
  }

   getPassword(){
    return this.loginForm.get('password')
  }

}
