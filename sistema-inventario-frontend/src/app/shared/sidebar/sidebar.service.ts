
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarContentSubject = new BehaviorSubject<string>('docentes');
  sidebarContent$ = this.sidebarContentSubject.asObservable();

  setSidebarContent(content: string) {
    this.sidebarContentSubject.next(content);
  }
}
