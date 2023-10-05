import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IntegratedValidator } from 'src/assets/globals';

@Component({
  selector: 'app-validated-mat-input',
  templateUrl: './validated-mat-input.component.html',
  styleUrls: ['./validated-mat-input.component.css']
})
export class ValidatedMatInputComponent implements OnInit {
// @Input() control?:FormControl
// @Input() validator?:IntegratedValidator
ngOnInit(): void {
  
}

}
