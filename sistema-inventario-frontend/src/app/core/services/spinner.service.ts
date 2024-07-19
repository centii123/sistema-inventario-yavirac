import { Injectable } from '@angular/core';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    private spinnerComponent: SpinnerComponent | null = null;

    registerSpinner(spinner: SpinnerComponent) {
        this.spinnerComponent = spinner;
    }

    show() {
        if (this.spinnerComponent) {
            this.spinnerComponent.show();
        }
    }

    hide() {
        if (this.spinnerComponent) {
            this.spinnerComponent.hide();
        }
    }
}