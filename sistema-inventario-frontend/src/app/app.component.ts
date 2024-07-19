import { Component, OnInit, ViewChild } from '@angular/core';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(SpinnerComponent) spinner!: SpinnerComponent;

  constructor(private spinnerService: SpinnerService){}

  ngAfterViewInit() {
    this.spinnerService.registerSpinner(this.spinner);
  }
  ngOnInit(): void {
  }

}
