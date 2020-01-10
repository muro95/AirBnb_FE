import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

}
