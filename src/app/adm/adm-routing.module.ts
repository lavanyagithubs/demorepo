import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdmComponent } from './adm.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';

const routes: Routes = [{ path: '', component: AdmComponent,children:[
  {path:"addproduct",component:AddproductComponent},
  {path:"showproducts",component:ShowproductsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
