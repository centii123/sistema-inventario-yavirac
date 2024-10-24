import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalConfirmDialogComponent } from './global-confirm-dialog.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    GlobalConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers:[
    MessageService,
    ConfirmationService
  ],
  exports:[
    GlobalConfirmDialogComponent
  ]
})
export class GlobalConfirmDialogModule { }
