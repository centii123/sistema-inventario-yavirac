import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
}
