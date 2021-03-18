import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userObj;
  constructor(private us:UserserviceService) { }

  ngOnInit(): void {
    let username = localStorage.getItem("username");
    this.us.viewCart(username).subscribe(
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

}
