import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patterns } from '../assets/globals';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
 group!:FormGroup;
constructor(private builder:FormBuilder){

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
}
