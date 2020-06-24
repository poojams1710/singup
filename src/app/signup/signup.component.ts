import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators,FormBuilder} from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {Country} from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  country : any;
  

  constructor(private fb :FormBuilder) { }

  Details = this.fb.group({
    firstname :['',[Validators.required,Validators.minLength(3)]],
    lastname : ['',[Validators.required]],
    username :['',[Validators.required]],
    password: ['', [Validators.required]],
    DOB:[''],
    country :[this.country],
  })

  submitvalue(){
    console.log(this.Details.value);
    console.log(this.country);
  }

  reset(){
    this.Details.setValue({
      firstname :"",
      lastname:"",
      username :"",
      password :"",
      DOB :"",
      country :""
    })
  }

  onCountrySelected($event: Country) {
    this.country=$event

  }

  get firstname() {
    return this.Details.get('firstname');
  }
  
  

  ngOnInit(): void {
    this.submitvalue();
    this.reset()
  }

}

