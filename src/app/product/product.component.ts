import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private us:UserserviceService,private ar : ActivatedRoute,private r:Router) { }
  product;
  count;
  Obj={username:"",name:"",size:"",userImgLink:""}
  ngOnInit(): void {
    this.ar.params.subscribe(
      params => {
        let name = params["name"];
        this.us.getProductbyid(name).subscribe(
          res => {
            this.product = res["message"];
            console.log(this.product)
          },
          err => console.log("something went wrong..")
        )
      }
    )

    

  }
  addtocart(){
    let username = localStorage.getItem("username");
    console.log(this.product)
    if(username){
    this.Obj.username=username;
    this.Obj.name=this.product.name;
    this.Obj.size=this.product.size;
    this.Obj.userImgLink=this.product.userImgLink
    console.log(this.Obj)
    this.us.addtocart(this.Obj).subscribe(
      res=>{
        alert(res["message"]);
        
      },
      err=>console.log("something went wrong")
    )
    }
    else
    {
      this.r.navigateByUrl("/login")
    }
  }
  
  


}
