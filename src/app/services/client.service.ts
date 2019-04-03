import { Injectable } from '@angular/core';
import{HttpHeaders, HttpClient} from '@angular/common/http';
import { Client } from '../Model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 private url:string="http://localhost:58783/api/";

  constructor(private http:HttpClient) { //recibe los datos ya instanciados, dentro de http se guarda un objetos de httpclient. permite realizar llamadas http
    
  }

  public GetAll():Promise<any>{//tipo de retorno significa q puedo devolver cualquier cosa
    let headers = new HttpHeaders();
    headers.append("content-type","application/x-www-form-uncode;charset=utf8");
    return this.http.get(this.url + "clients/GetAll",{headers:headers}).toPromise();//premite realizar una promesa de lo q t voy a pedir y devolver

  }

  public AddClient(client:Client):Promise<any>{
    let headers = new HttpHeaders();
    headers.append("content-type","application/x-www-form-uncode;charset=utf8");
    return this.http.post(this.url + "Clients/AddClient",client,{headers:headers}).toPromise();
  }
  public GetById(id:number):Promise<any>{
    console.log(id);
    let headers = new HttpHeaders();
    headers.append("content-type","application/x-www-form-uncode;charset=utf8");
    return this.http.get(this.url + "clients/GetById/"+id, {headers:headers}).toPromise();
  }

  public ModifyCliente(client:Client):Promise<any>{
    let headers = new HttpHeaders();
    headers.append("content-type","application/x-www-form-uncode;charset=utf8");
    return this.http.post(this.url + "clients/ModifyClient",client,{headers:headers}).toPromise();
  }
}
