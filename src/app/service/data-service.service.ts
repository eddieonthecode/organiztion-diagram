import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  hoverManager = new BehaviorSubject<string>('default message');
  hoverManagerObs = this.hoverManager.asObservable();

  changeCollapse = new BehaviorSubject<any>('');
  changeCollapseObs = this.changeCollapse.asObservable();

  constructor() {}

  hoverManagerHandler(message) {
    this.hoverManager.next(message);
  }

  changeCollapseHandler(param) {
    this.changeCollapse.next(param);
  }
}
