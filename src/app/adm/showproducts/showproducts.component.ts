import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
  userObj;
  constructor(private us:UserserviceService) { }

  ngOnInit(): void {
    
    
    this.us.ShowProducts().subscribe(
      res=>{
        
          this.userObj=res["message"]
          console.log(this.userObj)
       
        
      },
      err=>{
        alert("Something went wrong in show")
        console.log(err)
      }
    )
    
  }

  }


