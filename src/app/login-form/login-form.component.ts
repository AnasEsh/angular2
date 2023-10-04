import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patterns } from 'src/assets/globals';
import { UserService } from '../user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
 group!:FormGroup;
 isLoading:boolean=false;
constructor(private builder:FormBuilder, private uService:UserService){

}
clearForm(){
  
  for(let c of Object.keys(this.group.controls)){
    this.group.get(c)?.reset()
  }
}
ngOnInit(): void {
  this.group=this.builder.group({
    email:['', [Validators.required, Validators.pattern(Patterns.email)]],
    pswd:['', [Validators.required, Validators.minLength(6)]]
  })
  
}

submit(){
  this.isLoading=true
  this.uService.login(this.group.controls['email'].value,this.group.controls['pswd'].value)
  .subscribe(
    {
      next:(e)=>{
        console.log(`from the component ${JSON.stringify(e)}`)
      }
    }
  )
}
}
