import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  file:File;
  incomingfile(event){
    this.file = event.target.files[0];
  }
  constructor(private us:UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(ref){
    let userObj=ref.value;
    let formData=new FormData();
     //adding image and other data to ForData object
     formData.append('photo',this.file,this.file.name);
 
     formData.append("userObj",JSON.stringify(userObj)) //append() can only take the data in string format so convert the file datawhich is in binary to string
    
 
     this.us.CreateProduct(formData).subscribe(
       res=>{
         if(res["message"] == "product existed"){
           alert("product is already existed..");
         }
         if(res["message"] == "product added"){
           alert("product added succesfull");
 
           
         }
       },
       err=>{
         alert("Something went wrong in user creation");
         console.log(err);
       }  
     )
     //console.log(ref.value);
 }

 

}
