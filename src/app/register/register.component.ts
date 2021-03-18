import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private r:Router,private us:UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(formRef:any){
    let userObj = formRef.value;
    console.log(userObj);

    this.us.createUser(userObj).subscribe(
      res=>{
        if(res["message"] == "user existed"){
          alert("Username is already existed..choose another");
        }
        if(res["message"] == "user created"){
          alert("Registration succesfull");

          //navigate to login component
          this.r.navigateByUrl("/login");
        }
      },
      err=>{
        console.log("Something went wrong",err);
      }
    )
  }
}


