import { Component } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup,Validators,FormControl } from '@angular/forms';
// import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription } from 'rxjs';
@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent  {
  device:boolean;
  constructor( private http: HttpClient  ){
  }
 client=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*")
})
onSubmit(e)
  {
    const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFyaXRoYSBwIiwiaWQiOjEsImVtYWlsIjoiaGFyaXRoYXBuYWlyMjIwNUBnbWFpbC5jb20iLCJtb2JpbGVObyI6Ijk0ODk0NTIzNDgiLCJSb2xlTmFtZSI6IkFkbWluIiwidmVuZG9ySWQiOm51bGwsImlhdCI6MTU5NTg2MDMxOSwiZXhwIjoxNTk4NDUyMzE5fQ.NDvejKkotVpGzqMm5HMxaayxcUqgVTFoXuAW8cqJ2Fc'
}
const request = {                                                                                                                                                                                 
  headers: new HttpHeaders(header), 
};
    this.client.reset();
    this.http.post ('http://localhost:3000/api/client-masters', e,request)
    .subscribe((result)=>{
      console.log(result);
    console.log(e);
    })
  }
 get name(){return this.client.get("name")}
}
