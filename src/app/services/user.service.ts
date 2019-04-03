import { Injectable } from '@angular/core';
import{HttpHeaders, HttpClient} from '@angular/common/http';
import { User } from  '../Model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:58783/api/";
  
  constructor( private http:HttpClient ) { }

  public Login(user:User):Promise<any>{
    let headers = new HttpHeaders;
    headers.append("content-type","application/x-www-form-uncode;charset=utf8");
    return this.http.post(this.url + "/User/GetUserByEmail" , user, {headers:headers}).toPromise();
  }
  public AddUser(user:User):Promise<any>{
    let headers = new HttpHeaders;
    headers.append("content-type","application/x-www-form-uncode;charset=utf8");
    return this.http.post(this.url + "/User/UserAdd", user, {headers:headers}).toPromise();
  }
}
