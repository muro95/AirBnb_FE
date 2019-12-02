import {Component} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Case-Study';
  private info: any;

  constructor(private token: TokenStorageService) { }

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
    window.location.reload();
  }
}

