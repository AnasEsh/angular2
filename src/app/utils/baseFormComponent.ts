import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"
import { IntegratedValidator, globalValidators } from "src/assets/globals"
import { getValidator } from "./validatorMethods"

@Component({template: ''})
export abstract class FormWLoading implements OnInit{
    public isLoading:boolean=false
    errorText=""
    group!:FormGroup
    constructor(protected builder:FormBuilder){}
    abstract ngOnInit(): void

    abstract submit():void;
    clearForm():void{this.group.reset()}
    validator=getValidator
    getAsFormControl(name:string):FormControl{
        return this.group.controls[name] as FormControl
      }
}