import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private messageSource = new Subject<Boolean>();
  loginMessageSource$ = this.messageSource.asObservable();
  constructor() {}

  sendMessage(message: Boolean) {
    this.messageSource.next(message);
  }
}
