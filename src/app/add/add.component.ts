import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../Model/client';
import {NgForm} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers:[ClientService],
})
export class AddComponent implements OnInit {
    public client:Client=new Client();
    public message:string="";
  constructor(private clientService:ClientService,public toastr: ToastrManager) { }

  ngOnInit() {
  }
  onSubmit(){
    this.clientService.AddClient(this.client)
      .then(data=>{
        console.log("entre");
        this.message=data;
        if(this.message)
          this.toastr.successToastr('Se agrego con exito');
        else
         this.toastr.errorToastr(this.client.Dni,'El Dni ya existe');
      })
      .catch(data=>{
        this.message = data;
      });
    }
  }
