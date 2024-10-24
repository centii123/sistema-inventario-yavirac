import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent{
  @Input() load: Boolean= false;

  async show(){
    this.load= true;
  }

  async hide(){
    this.load=false
    console.log(this.load)
  }
}
