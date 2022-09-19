import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm = new FormGroup({});
  loading:boolean = false;

  constructor(
    private fb: FormBuilder,
    private rt: Router,
    private ss: SecurityService,
    private sb: MatSnackBar ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName:['', [
        Validators.required,
        Validators.maxLength(20)
      ]],
      email:['',[
        Validators.required,
        Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(1000)
      ]],
      confirmPassword:['',[
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(100)
      ]]
    })
  } 


  submitData(){
    let body = this.registrationForm.value
    this.loading = true;
    this.ss.register(body).subscribe(
      success => {
        this.openSnackBarWithMessage(success,7000)
        this.loading = false,
        this.rt.navigateByUrl('auth/login')
        },
      error => {
        this.openSnackBarWithMessage(error.error,3500), 
        this.loading = false
      } 
    )
  }
  openSnackBarWithMessage(message:string,durationInMs:number){
    this.sb.open(message,'Fechar',{duration:durationInMs})
  }
  routeLogin(){
    this.registrationForm.disable
    this.rt.navigateByUrl("auth/login")
  }
  getUserName(){
    return this.registrationForm.get('userName')
  }
  getEmail(){
    return this.registrationForm.get('email')
  }
  getPassword(){
    return this.registrationForm.get('password')
  }
  getConfirmPassword(){
    return this.registrationForm.get('confirmPassword')
  }
}