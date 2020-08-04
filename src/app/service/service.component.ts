import { Component, OnInit} from '@angular/core';
import {  FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
interface service {
  value: string;
  viewValue: string;
}
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
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  client = [];
  location = [];
  vehicle = [];
  categories: service[] = [
    {value: 'ON_SPOT_REPAIRS', viewValue: 'ON_SPOT_REPAIRS'}, 
    {value: 'TOWING', viewValue: 'TOWING'},
    {value: 'RSA', viewValue: 'RSA'},
    {value: 'GS', viewValue: 'GS'},
    {value: 'INSPECTION', viewValue: 'INSPECTION'}
  ];
 codes: service[] = [
    {value: 'FLAT_TYRE', viewValue: 'FLAT_TYRE'}, 
    {value: 'ZERO_DEGREE_TOWING', viewValue: 'ZERO_DEGREE_TOWING'},
    {value: 'LIFT_TOWING', viewValue: 'LIFT_TOWING'},
    {value: 'FTE_TUBE', viewValue: 'FTE_TUBE'},
    {value: 'FTE_TUBELESS', viewValue: 'INSPECTION'}
  ];
  leadtime: service[] = [
    {value: '30', viewValue: '30'}, 
  ];
  intervaltime: service[] = [
    {value: '30', viewValue: '30'}, 
  ];
  constructor( private http: HttpClient  ){
  }
  ngOnInit(): void {
    this.getClient();
    this.getVehicle();
    this.getLocation();
  }
    service=new FormGroup({
    category : new FormControl('',Validators.required),
    serviceCode : new FormControl('',Validators.required),
    clientId : new FormControl(''),
    locationId : new FormControl(''),
    vehicleId : new FormControl(''),
    leadTime : new FormControl('',Validators.required),
    intervalTime : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    name:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*")]),
    dayCharge : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    nightCharge : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    tax : new FormControl('',[Validators.required, Validators.pattern("^.[0-9]*$")]),
    displayToCustomer : new FormControl('',Validators.required)})
    onSubmit(e)
    {
      this.service.reset();
      var array:any=JSON.stringify({"category":String(e.category),
      "serviceCode":String(e.serviceCode),
      "clientId":Number(e.clientId),
      "locationId":Number(e.locationId),
      "vehicleId":Number(e.vehicleId),
      "description":String(e.description),
      "leadTime":Number(e.leadTime),
      "intervalTime":Number(e.intervalTime),
      "tax":Number(e.tax),
      "name":String(e.name),
      "dayCharge":Number(e.dayCharge),
      "nightCharge":Number(e.nightCharge),
      "displayToCustomer":Boolean(e.displayToCustomer)})
      console.log(array);
      this.http.post ('http://localhost:3000/api/service-masters', array,request)
      .subscribe((result)=>{
        console.log(result);  
    })
  }
  getClient(){
    return this.http.get<any>('http://localhost:3000/api/client-masters',request)
    .subscribe((res)=>{
      this.client = res;
    })
  }
    getVehicle(){
      return this.http.get<any>('http://localhost:3000/api/vehicle-masters',request)
      .subscribe((res)=>{
      this.vehicle = res;
      })
    }
    getLocation(){
      return this.http.get<any>('http://localhost:3000/api/locations',request)
      .subscribe((res)=>{
      this.location = res;
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
