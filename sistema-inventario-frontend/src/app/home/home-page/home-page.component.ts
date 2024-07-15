import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl:'./home-page.component.html',

  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router){}
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

  async cerrarSesion(){
    sessionStorage.removeItem('token')

    await this.router.navigate(['/']);
  }
}
