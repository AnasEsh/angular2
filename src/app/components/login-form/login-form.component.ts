import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FormWLoading } from '../../utils/baseFormComponent';
import { IntegratedValidator, globalValidators } from 'src/assets/globals';
import { buildValidatorList } from '../../utils/validatorMethods';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent extends FormWLoading{
  nameControl = new FormControl('')
constructor(builder:FormBuilder, private uService:UserService){
  super(builder)
}
ngOnInit(): void {

  this.group=this.builder.group({
    email:['', buildValidatorList('email')],
    pswd:['', buildValidatorList('pswd')]
  })

 
}

submit(){
  this.isLoading=true
  this.errorText=''
  this.uService.login(this.group.controls['email'].value,this.group.controls['pswd'].value)
  .subscribe(
    {
      next:(res)=>{
   
        if(res.ok)
        return
        this.errorText=res.errorMessage||"Something went wrong, its not your fault"
      },
      complete:()=>{
        this.isLoading=false
      }
    }
  )
}
}
