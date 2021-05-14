import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.class'
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class userService {
  public url: string;

  constructor(private httpClient: HttpClient) {}
  getUser(email, password) {
    return this.httpClient.get(`http://localhost:3700/api/user/${email}/${password}`);
    
    }
}
