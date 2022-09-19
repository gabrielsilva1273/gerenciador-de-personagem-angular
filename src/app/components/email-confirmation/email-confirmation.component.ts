import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {
  token: any;
  successMessage!:string;
  errorMessage!:string;
  

  constructor(private route: ActivatedRoute,private ss: SecurityService) { }

  ngOnInit(): void {
    this.getToken();
    this.getMessageFromBackEnd()
  }

  getToken(){
    this.route.queryParamMap.subscribe(params =>{
      this.token = params.get('token');})
  }

  getMessageFromBackEnd(){
    this.ss.confirmToken(this.token).subscribe(
      success => this.successMessage = success,
      error => this.errorMessage = error.error
      );
    
  }

}
