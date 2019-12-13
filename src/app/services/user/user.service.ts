import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataUserBooking} from '../../components/user/user-booking/data-user-booking/dataUserBooking';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/';

  private userUrl = 'http://localhost:8080/api/test/user';
  private adminUrl = 'http://localhost:8080/api/test/host';

  constructor(private httpClient: HttpClient) {
  }

  getUserBoard(): Observable<string> {
    return this.httpClient.get(this.userUrl, {responseType: 'text'});
  }

  getAdminBoard(): Observable<string> {
    return this.httpClient.get(this.adminUrl, {responseType: 'text'});
  }


  public sendRequestBooking(booking: DataUserBooking, id: number): Observable<DataUserBooking> {
    return this.httpClient.post<DataUserBooking>(this.API_URL + 'houses/' + id + '/booking', booking);
  }
}
