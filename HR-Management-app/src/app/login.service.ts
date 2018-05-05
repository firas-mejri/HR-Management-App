import { Injectable } from '@angular/core';

import { loginTest } from './loginTest';
import { LoginComponent } from './login/login.component';
import { LoginInfo } from './loginInfo';

@Injectable()
export class LoginService {

  constructor() { }

  checkUser(loginInfo: LoginInfo) : string{
    if (loginInfo.login == loginTest.login && loginInfo.password == loginTest.password){
      return 'success';
    }else{
      return 'failure';
    }
  }

}
