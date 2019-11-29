import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {AuthLoginInfo} from '../../auth/login-infor';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  isSuccess = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      console.log('token_:' + this.tokenStorage.getToken());
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
// store to web browser;
    this.authService.attemptAuth(this.loginInfo).subscribe(
      responseJWT => {
        console.log('get UserName from BE:' + responseJWT.data.username);
        console.log('get token from BE:' + responseJWT.data.accessToken);
        this.tokenStorage.saveToken(responseJWT.data.accessToken);
        this.tokenStorage.saveUsername(responseJWT.data.username);
        this.tokenStorage.saveAuthorities(responseJWT.data.roles);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        // this.reloadPage();
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.isSuccess = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
