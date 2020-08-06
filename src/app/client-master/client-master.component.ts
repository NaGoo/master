import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFyaXRoYSBwIiwiaWQiOjEsImVtYWlsIjoiaGFyaXRoYXBuYWlyMjIwNUBnbWFpbC5jb20iLCJtb2JpbGVObyI6Ijk0ODk0NTIzNDgiLCJSb2xlTmFtZSI6IkFkbWluIiwidmVuZG9ySWQiOm51bGwsImlhdCI6MTU5NTg2MDMxOSwiZXhwIjoxNTk4NDUyMzE5fQ.NDvejKkotVpGzqMm5HMxaayxcUqgVTFoXuAW8cqJ2Fc'
}
  const request = {                                                                                                                                                                                 
  headers: new HttpHeaders(header), 
};
@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent  {
  isCreated:boolean = false;
  isExist:boolean = false;
  lists=[];
  title(title: any) {
    throw new Error("Method not implemented.");}
  constructor( private http: HttpClient ,private toastr: ToastrService){}
service = [];
 client=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*")])
 })
 ngOnInit(){
  this.get();
}
get(){
  this.http.get('http://localhost:3000/api/client-masters',request)
  .subscribe((data :any[])=>{
    this.lists = data;
  })
}
 onDelete(id:number){
  this.http.delete('http://localhost:3000/api/client-masters/' +id ,request) 
  .subscribe((a)=>
  {
    console.log(a);
    this.get();
  })
}
onSubmit(e)
  {
    this.http.post ('http://localhost:3000/api/client-masters', e,request)
    .subscribe((result)=>{
    console.log(result);
    this.get();
    this.isCreated =true;
    this.isExist = false;
    console.log(e); 
    this.client.reset(); 
    },
    error =>{
      this.isCreated=false;
      if(error.status==409)
      this.isCreated =false;
      this.isExist=true;
    })
    this.client.reset(); 
  }
 get name(){return this.client.get("name")}
}
