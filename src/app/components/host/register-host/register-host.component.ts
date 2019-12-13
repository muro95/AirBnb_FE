import {Component, OnInit} from '@angular/core';
import {SignUpInfo} from '../../../auth/sigup-info';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../auth/auth.service';
import {SigupHostInfo} from '../../../auth/sigup-host-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-host',
  templateUrl: './register-host.component.html',
  styleUrls: ['./register-host.component.css']
})
export class RegisterHostComponent implements OnInit {
  form: any = {};
  signupHostInfo: SigupHostInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.form);

    this.signupHostInfo = new SigupHostInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUpHost(this.signupHostInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;

      }
    );
    if (this.isSignUpFailed) {
      alert('Đăng ký thất bại.');
    } else {
      alert('Đăng ký thành công.');
    }
    this.router.navigate(['/login']);
  }
}
