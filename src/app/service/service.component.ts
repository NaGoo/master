import { Component } from '@angular/core';
import {  FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  constructor( private http: HttpClient  ){
  }
    service=new FormGroup({
    category : new FormControl('',Validators.required),
    serviceCode : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    clientId : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    locationId : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    vehicleId : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    leadTime : new FormControl('',Validators.required),
    intervalTime : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    dayCharge : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    nightCharge : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    tax : new FormControl('',[Validators.required, Validators.pattern("^.[0-9]*$")]),
    displayToCustomer : new FormControl('',Validators.required)})
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
      this.service.reset();
      this.http.post ('http://localhost:3000/api/service-masters', e,request)
      .subscribe((result)=>{
        console.log(result);
      console.log(e);
      })
    }
 get category(){return this.service.get('category')}
 get serviceCode(){return this.service.get('serviceCode')}
 get clientId(){return this.service.get('clientId')}
 get locationId(){return this.service.get('locationId')}
 get vehicleId(){return this.service.get('vehicleId')}
 get description(){return this.service.get('description')}
 get leadTime(){return this.service.get('leadTime')}
 get intervalTime(){return this.service.get('intervalTime')}
 get name(){return this.service.get('name')}
 get dayCharge(){return this.service.get('dayCharge')}
 get nightCharge(){return this.service.get('nightCharge')}
 get tax(){return this.service.get('tax')}
 get displayToCustomer(){return this.service.get('displayToCustomer')} 
}
