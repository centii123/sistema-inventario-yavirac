// navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sidebarService: SidebarService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['sidebarContent']) {
        this.sidebarService.setSidebarContent(data['sidebarContent']);
      }
    });
  }

  header = false;
  side = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const sidebar = document.querySelector("#sidebar") as HTMLElement;
    const clickedInsideSidebar = sidebar.contains(event.target as Node);
    const clickedMenuIcon = (event.target as HTMLElement).classList.contains('menu-icon') || (event.target as HTMLElement).closest('.menu-icon') != null;

    if (!clickedInsideSidebar && this.side && !clickedMenuIcon) {
      this.closeSidebar();
    }
  }

  openSidebar() {
    const sidebar = document.querySelector("#sidebar") as HTMLElement;
    if (sidebar) {
      sidebar.classList.remove("hidden");
      sidebar.classList.add("flex");
      this.side = true;
    }
  }

  closeSidebar() {
    const sidebar = document.querySelector("#sidebar") as HTMLElement;
    if (sidebar) {
      sidebar.classList.add("hidden");
      sidebar.classList.remove("flex");
      this.side = false;
    }
  }

  dropdownHandler() {
    if (!this.header) {
      (document.querySelector("#dropdown") as HTMLElement).classList.remove("hidden");
      this.header = true;
    } else {
      (document.querySelector("#dropdown") as HTMLElement).classList.add("hidden");
      this.header = false;
    }
  }

  noti = false;

  dropdownNoti() {
    if (!this.noti) {
      (document.querySelector("#dropdownNotification") as HTMLElement).classList.remove("hidden");
      this.noti = true;
    } else {
      (document.querySelector("#dropdownNotification") as HTMLElement).classList.add("hidden");
      this.noti = false;
    }
  }

  async cerrarSesion(){
    sessionStorage.removeItem('token');
    await this.router.navigate(['/']);
  }
}
