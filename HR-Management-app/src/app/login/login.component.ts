import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  userType: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute) {
      this.form = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  ngOnInit() {

  }


  login() {
    const val = this.form.value;

    if (val.email && val.password) {
        this.authService.login(val.email, val.password);
    }
}


}