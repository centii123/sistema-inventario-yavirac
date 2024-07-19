// sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  side = false;
  content = 'docentes';

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarContent$.subscribe(content => {
      this.content = content;
    });
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
}
