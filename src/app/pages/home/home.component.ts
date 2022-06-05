import { UserService } from './../../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loginForm?: FormGroup
  public error?: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  public loginUser() {
    if (this.loginForm?.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (res) => this.router.navigateByUrl("/pokemon"),
        error: (err) => this.error = err.error.message
      });
    }
  }

  

}
