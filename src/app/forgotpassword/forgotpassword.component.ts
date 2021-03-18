import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  status=false;
  constructor(private r:Router,private us:UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(formRef){
    let obj= formRef.value;
    if(obj.password1==obj.password2){
        this.us.changePassword(obj).subscribe(
          res=>{
            if(res["message"]=="success"){
              //navigate login
              this.r.navigateByUrl("/login")
            }
           err=>{
             console.log("error in password reset")
             console.log(err)
           }
          }
        )
    }
    else{
      this.status=true
    }

}
}
