import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  header = false;

  dropdownHandler() {
    if (!this.header) {
      (document.querySelector("#dropdown") as HTMLElement).classList.remove("hidden");
      this.header = true;
    } else {
      (document.querySelector("#dropdown") as HTMLElement).classList.add("hidden");
      this.header = false;
    }
  }

  side = false;

  openSidebar() {
    (document.querySelector("#sidebar") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#sidebar") as HTMLElement).classList.add("flex");
    this.side = true;
  }

  closeSidebar() {
    (document.querySelector("#sidebar") as HTMLElement).classList.add("hidden");
    (document.querySelector("#sidebar") as HTMLElement).classList.remove("flex");
    this.side = false;
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
}
