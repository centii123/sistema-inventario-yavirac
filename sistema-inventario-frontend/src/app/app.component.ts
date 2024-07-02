import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';

  side = false;

  dropdownSidebar() {
    if (!this.side) {
      (document.querySelector("#sidebar") as HTMLElement).classList.remove("hidden");
      (document.querySelector("#sidebar") as HTMLElement).classList.add("flex");
      this.side = true;
    } else {
      (document.querySelector("#sidebar") as HTMLElement).classList.add("hidden");
      (document.querySelector("#sidebar") as HTMLElement).classList.remove("flex");
      this.side = false;
    }
  }

  closeSidebar() {
    (document.querySelector("#sidebar") as HTMLElement).classList.add("hidden");
      this.side = false;
  }

  public load: Boolean= false;
  ngOnInit(): void {
      setTimeout(()=>{
        this.load= true;
      },1000)
  }

}
