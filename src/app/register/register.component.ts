import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Model/user';
import {NgForm} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  public user = new User();
  constructor(private userService:UserService,public toastr: ToastrManager) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.user);
    this.userService.AddUser(this.user).then(response =>{
      if(response==true){
        this.toastr.successToastr('Se registro con exito');
      }
      else{
        this.toastr.errorToastr('El usuario ya existe');
      }
    }) 
  }
}
