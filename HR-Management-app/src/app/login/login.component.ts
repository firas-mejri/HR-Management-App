import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginInfo } from '../loginInfo';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfos: LoginInfo = {
    login: "", 
    password: ""
  };
  userType: string;
  check: string;
  loginError: string ="";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsrType();
  }

  getUsrType(): void {
    const usrType = this.route.snapshot.paramMap.get('type');
    this.userType = usrType;
  }
  auth(): string{
    return this.loginService.checkUser(this.loginInfos);

  }
  onSubmit(): void{
    this.check = this.auth();
  // here we will need to create another way
  // to start and store a session once the backend is ready
    if(this.check == 'success'){
      this.router.navigate(['/management-space']);
    }else{
      this.loginError ="Nom d'Utilisateur Ou Mot de Passe incorrect";
    } 
  }

}