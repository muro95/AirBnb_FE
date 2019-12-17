import {Component} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from './components/shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Case-Study';
  private info: any;

  constructor(
    private token: TokenStorageService, private router: Router) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
  }

  logout() {
    this.token.signOut();
    // window.location.reload();
    this.router.navigateByUrl('/home');
  }


}

