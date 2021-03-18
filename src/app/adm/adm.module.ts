import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';

@NgModule({
  declarations: [AdmComponent, AddproductComponent, ShowproductsComponent],
  imports: [
    CommonModule,
    AdmRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdmModule { }
