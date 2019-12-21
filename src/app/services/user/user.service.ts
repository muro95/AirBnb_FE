import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataUserBooking} from '../../components/user/user-booking/data-user-booking/dataUserBooking';
import {OrderListOfUser} from '../../components/user/list-order-of-user/dataOrderListOfUser/orderListOfUser';
import {DataOrderListOfUser} from '../../components/user/list-order-of-user/dataOrderListOfUser/dataOrderListOfUser';


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

  public getListOrderOfUser(): Observable<OrderListOfUser> {
    return this.httpClient.get<OrderListOfUser>(this.API_URL + 'me/orders');
  }

  public cancelOrder(id: number): Observable<OrderListOfUser> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + window.sessionStorage.getItem('TOKEN_KEY')
    });
    return this.httpClient.delete<OrderListOfUser>(this.API_URL + 'me/orders/' + id + '/delete', {headers});
  }

  public getOrderById(id: number): Observable<OrderListOfUser> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + window.sessionStorage.getItem('TOKEN_KEY')
    });
    return this.httpClient.get<OrderListOfUser>(`http://localhost:8080/api/me/orders/${id}`, {headers});
  }
}
