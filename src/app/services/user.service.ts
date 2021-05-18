import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.class';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class userService {
  public url: string;

  constructor(private httpClient: HttpClient) {}
  getUser(email, password) {
    return this.httpClient.get(
      `http://localhost:3700/api/user/${email}/${password}`
    );
  }

  // Service from ASP NET CORE BACKEND
  public getAllRecords() {
    return this.httpClient.get('https://localhost:44316/api/users');
  }

  public createRecord(user) {
    return this.httpClient.post('https://localhost:44316/api/users', user);
  }

  public updateRecord(userId, user) {
    return this.httpClient.put(
      'https://localhost:44316/api/users' + userId,
      user
    );
  }

  public deleteRecord(userId) {
    return this.httpClient.delete('https://localhost:44316/api/users' + userId);
  }
}
