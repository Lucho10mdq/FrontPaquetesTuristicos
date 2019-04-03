import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  public user=new User();

  constructor(private userService:UserService,private router: Router,public toastr: ToastrManager) { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.user.Name == null && this.user.Password == null )
    {
      this.toastr.errorToastr('Datos incompletos');
    }else{
      this.userService.Login(this.user) .then(response =>{
        if(response==null){
          this.toastr.errorToastr('Email y/o Password incorrectos');
        }else {
          this.router.navigate(['/main']);
        }    
      })
      .catch( response=>{  
        this.toastr.errorToastr('Error de servidor')
      })
    }
  }
}
