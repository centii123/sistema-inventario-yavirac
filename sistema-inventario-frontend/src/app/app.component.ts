import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  products!: any[];

    constructor() {}

    ngOnInit() {
         this.products  = [{name:"santiago",code:"asdasd",category:"sfasdas",quantity:"asdasd"},
          {name:"SAntiago",code:"asdasdas",category:"Fsfasfas",quantity:"asdasdasdas"}]
    }
}
