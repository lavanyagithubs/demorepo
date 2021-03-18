import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private hc:HttpClient) { }
  createUser(formData):Observable<any>{
    return this.hc.post("/user/register",formData);
  }
  loginUser(userCredObj):Observable<any>{
    return this.hc.post("/user/login",userCredObj);
  }
  changePassword(obj):Observable<any>{
    return this.hc.post("/user/forgotpassword",obj);
  }
  CreateProduct(formData):Observable<any>{
    return this.hc.post("/admin/addpro",formData)
  }
  ShowProducts():Observable<any>{
    return this.hc.get("/admin/getpro")
  }
  getProducts():Observable<any>{
    return this.hc.get("/admin/getproduct")
  }
  getProductbyid(name):Observable<any>{
    return this.hc.get("/admin/getproduct/"+name)
  }
  addtocart(Obj):Observable<any>{
    return this.hc.post("/cart/addtocart",Obj);
  }
  viewCart(username):Observable<any>{
    return this.hc.get("/cart/viewcart/"+username)
  }
}
