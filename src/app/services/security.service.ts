import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  baseUrl:string = 'https://gerenciador-de-personagem.herokuapp.com';
  //baseUrl:string = 'localhost:8080';

  constructor(private http:HttpClient) { }
  
  register(data: any): Observable<any> {
    const registerUrl = this.baseUrl+'/auth/registrar'
     return this.http.post(registerUrl,data,{responseType: 'text'});
  }

  confirmToken(token: string):Observable<any> {
    const confirmationUrl = this.baseUrl+'/auth/confirmar?token='+token;
    return this.http.get(confirmationUrl, {responseType: 'text'});
  }

  login(data: any): Observable<any> {
    const loginUrl = this.baseUrl+'/auth/login';
    return this.http.post(loginUrl,data,{responseType: 'json'})
  }

  setSession(jwt:string,expiresAt:string){
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('expiresAt',expiresAt)
  }

  logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('expiresAt');
  }

  public isLoggedIn() {
    const stringDate:string = this.getExpiration()!;
    const expirationDate = new Date(stringDate)
    const expirationMilli = expirationDate.getTime();
    
    const dateNow = new Date()
    const dateNowMilli = dateNow.getTime();

    if (dateNowMilli < expirationMilli){
      return true;
    }else{
      return false;
    }
  }
isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {
    const expiration = localStorage.getItem("expiresAt");
    return expiration;
}
getJwt():string {
  const jwt = localStorage.getItem("jwt");
  if (jwt ===null){
    return ""
  }
  return jwt;
}


}
