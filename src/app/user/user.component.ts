import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userObj;
  product;
  count;
  Obj={username:"",name:"",size:"",userImgLink:""}
 
  username;
  constructor(private us:UserserviceService,private r:Router) { }

  ngOnInit(): void {
    let username = localStorage.getItem("username");
    
    this.getcount();

    /*this.us.getProducts().subscribe(
      res=>{
        
          this.userObj=res["message"]
          //console.log(this.userObj)
       
        
      },
      err=>{
        alert("Something went wrong in show")
        console.log(err)
      }
    )
    
  }
  view(name){
    //navigate product
    this.r.navigate(["/product",name]);
  }*/

  }
  logout(){
    //clear localstorage
    localStorage.clear();

    //navigate to home page
    this.r.navigateByUrl("/home");
  }
  viewcart(){
    this.r.navigateByUrl("/cart")
  }
  getcount(){
    let username = localStorage.getItem("username");
    this.us.viewCart(username).subscribe(
      res=>{
        
          this.count=res["message"].length;
          console.log(this.count)
       
        
      },
      err=>{
        alert("Something went wrong in show")
        console.log(err)
      }
    )
  }
  
 
  }
 





