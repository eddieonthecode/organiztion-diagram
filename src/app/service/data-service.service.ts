import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  hoverManager = new BehaviorSubject<string>('default message');
  hoverManagerObs = this.hoverManager.asObservable();
  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

  constructor() {}

  // method này để change source message
  hoverManagerHandler(message) {
    this.hoverManager.next(message);
  }
}
