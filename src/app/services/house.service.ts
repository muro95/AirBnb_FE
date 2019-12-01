import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interface/house';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public getList(): Observable<House[]> {
    return this.httpClient.get<House[]>('http://localhost:8080/api/houses');
  }

  public getHouseId(id: number): Observable<House> {
    return this.httpClient.get<House>(this.API_URL + 'houses2/' + id);
  }
}
