import { Router } from '@angular/router';
import { UserService } from './../../core/services/user/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signupForm?:FormGroup

  constructor(
    public userService:UserService,
    public fb:FormBuilder,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    })
  }

  public registerUser() {
    if (this.signupForm?.value) {
      this.userService.register(this.signupForm.value).subscribe((res) => console.log(res));
    }
  }

}
