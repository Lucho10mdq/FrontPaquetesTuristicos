import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../services/client.service';
import {NgForm} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers:[ClientService]
})
export class EditComponent implements OnInit {
  public id:number;
  public client:Client=new Client();
  constructor(private clientService:ClientService, private route:ActivatedRoute, private router:Router) { }//con esto traigo lo que carga en el route

  ngOnInit() {
    this.id=this.route.snapshot.params["clientId"];//con esto levanto una captura del route, y me levanto el objeto
    this.clientService.GetById(this.id)
    .then(data=>{
      console.log(data);
      this.client = data;
    })
  }
    onSubmit(){
      this.clientService.ModifyCliente(this.client)
      .then(data=>{
        console.log(data);
        this.router.navigate(['/list']);
      })
      .catch(data=>{
      })
      
    }
}
