import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 

import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatInputModule} from '@angular/material/input'; 
import { AppComponent }      from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceComponent } from './service/service.component';
import { ClientMasterComponent } from './client-master/client-master.component';
// import { ClientMasterComponent } from './client-master/client-master.component';

@NgModule({
  imports: [
    BrowserModule,MatToolbarModule,MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,MatButtonModule,MatInputModule,MatCheckboxModule
    
    
  ],
  declarations: [
    AppComponent,
    ServiceComponent,
    ClientMasterComponent,
    // ClientMasterComponent,
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }
