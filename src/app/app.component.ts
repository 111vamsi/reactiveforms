import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  regForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      Validators:this.passwordMatchValidation
    }
  )
  }
  passwordMatchValidation(form:FormGroup){
    const password=form.get('password');
    const cpassword=form.get('confirmPassword');
    if(password?.value!=cpassword?.value)
      return{
    mismatch:true
    }
    else{
      return null
    }

  }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  submit() {
    this.submitted = true;
    if (this.regForm.valid) {
      console.log(this.regForm.value);
    }
  }

  reset(){
    this.submitted=false;
    this.regForm.reset()
  }
}
