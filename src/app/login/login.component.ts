import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r:Router,private us:UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(formRef) {

    let userCredObj = formRef.value;
    console.log(userCredObj);
    //if user
    if (userCredObj.usertype == "user") {
      this.us.loginUser(userCredObj).subscribe(
        res => {
          if (res["message"] == "success") {
            //store tiken and username in browser's localstorage
            localStorage.setItem("token", res["signedToken"]);
            localStorage.setItem("username", res["username"]);

            alert("Successfully Logged in!")
             //navigate to admin dashboard
              this.r.navigateByUrl("/user");
          }
          else {
            alert(res["message"])
          }
        },
        err => {
          console.log("Something went wrong", err);
        }
      )
    }

    if (userCredObj.usertype == "admin") {
      console.log(userCredObj);
      if (userCredObj.username == "lavanya" && userCredObj.password == "123") {
        //navigate to admin dashboard
        this.r.navigateByUrl("/adm");
      }
      else{
        alert("Wrong Password!");
      }
    }
  }
  forgotpassword(){
    //navigate to forgot password page
    this.r.navigateByUrl("/forgotpassword")
  }
}


