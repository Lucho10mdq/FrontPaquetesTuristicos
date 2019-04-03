import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../Model/client';
import {  Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[ClientService]//importe el servicio
})
export class ListComponent implements OnInit {

  
  constructor(private clientService:ClientService,private route:ActivatedRoute,private router: Router,) { }
  clientList:Array<Client>=new Array<Client>();

  ngOnInit() {
    this.clientService.GetAll()
      .then(data=>{
        console.log(data);
        this.clientList=data;
      })
  }
  Modificar(id){
    console.log(id);
    this.router.navigate(['/edit/'+ id]);
  }

}
