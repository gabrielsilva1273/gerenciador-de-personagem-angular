import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { Personagem } from '../model/personagem';
import { Slice } from '../model/slice';


@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  baseUrl:string = 'https://gerenciador-de-personagem.herokuapp.com';
  //baseUrl:string = 'localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:'token'
    }),
    params: new HttpParams()
  }

  constructor(private http:HttpClient,private ss:SecurityService) { }

  create(data: any):Observable<any>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    return this.http.post(this.baseUrl+'/personagens',data,this.httpOptions)
  }

  readAll():Observable<Slice>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    return this.http.get<Slice>(this.baseUrl+'/personagens',this.httpOptions)
  }

  readAllWithPageNumber(pageNumber:number):Observable<Slice>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    this.httpOptions.params = this.httpOptions.params.set('page',pageNumber)
    return this.http.get<Slice>(this.baseUrl+'/personagens',this.httpOptions)
  }

  readAllByName(name:string):Observable<Slice>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    this.httpOptions.params = this.httpOptions.params.set('name',name)
    return this.http.get<Slice>(this.baseUrl+"/personagens/procurar",this.httpOptions)
  }

  deleteById(id:string):Observable<any>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    this.httpOptions.headers = this.httpOptions.headers.set('responseType','json')
    return this.http.delete(this.baseUrl+"/personagens/"+id,this.httpOptions)
  }

  readById(id:string):Observable<Personagem>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    return this.http.get(this.baseUrl+"/personagens/"+id,this.httpOptions)
  }
  updateById(p:Personagem):Observable<Personagem>{
    const jwt = this.ss.getJwt();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','Bearer '+jwt)
    return this.http.put(this.baseUrl+"/personagens",p,this.httpOptions)
  }
}
