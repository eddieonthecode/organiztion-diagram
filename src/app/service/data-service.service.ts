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

  changeCollapseLevel = new BehaviorSubject<any>('');
  changeCollapseLevelObs = this.changeCollapseLevel.asObservable();

  constructor() {}

  hoverManagerHandler(message) {
    this.hoverManager.next(message);
  }

  changeCollapseHandler(param) {
    this.changeCollapse.next(param);
  }

  changeCollapseLevelHander(param) {
    this.changeCollapseLevel.next(param);
  }
}
