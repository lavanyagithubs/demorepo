import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userObj;
  Obj={username:"",name:"",size:"",userImgLink:""}
  constructor(private us:UserserviceService,private r:Router) { }

  ngOnInit(): void {
    this.us.getProducts().subscribe(
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
  }
 
}
