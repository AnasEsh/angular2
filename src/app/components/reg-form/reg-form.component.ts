import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormWLoading } from '../../utils/baseFormComponent';
import { buildValidatorList } from 'src/app/utils/validatorMethods';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent extends FormWLoading{

  ngOnInit(): void {
    this.group=this.builder.group({
      name:['', buildValidatorList("name")],
      email:['', buildValidatorList("email")],
      pswd:['',buildValidatorList("pswd")],
      confPswd:['',[...buildValidatorList("confPswd"),
      (control:FormControl):{ [key: string]: any } | null  =>(control.value!=this.group?.controls['pswd']?.value)?{matchState:"Passwords does not match"}:null]]
    })

  }
  override submit(): void {
   
  }
  

  constructor(builder:FormBuilder) {
    super(builder);
  }


}
