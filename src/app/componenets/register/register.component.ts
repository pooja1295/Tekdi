import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //take reactive form value 

  registerForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mno:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required)


  })
 //function for submit resgitratin form details
  registerUser()
  {
    console.warn(this.registerForm.value);
  }

  get name()
  {
    return this.registerForm.get('name')
  }
  get email(){
    return this.registerForm.get('email')
  }

  get mno(){
    return this.registerForm.get('mno')
  }

  get address(){
    return this.registerForm.get('address')
  }





  constructor() { }

  ngOnInit(): void {
  }

}
