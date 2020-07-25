import { Component, OnInit } from '@angular/core';
import {  FormControl,FormGroup,Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent implements OnInit {


  client=new FormGroup({
    name:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(a){
    console.log(a);
  }
get name(){
  return this.client.get('name')
}
}
