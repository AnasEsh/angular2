import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormWLoading } from '../../utils/baseFormComponent';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent extends FormWLoading{

  ngOnInit(): void {
    this.group=this.builder.group({
      name:['', Validators.required, Validators.minLength(8), Validators.maxLength(100)],
      // email:['', Validators.required, Validators.pattern(Patterns.email)],
      pswd:['', Validators.required, Validators.minLength(6)],
      confPswd:['']
    })
  }
  override submit(): void {
   
  }
  

  constructor(builder:FormBuilder) {
    super(builder);
  }

}
