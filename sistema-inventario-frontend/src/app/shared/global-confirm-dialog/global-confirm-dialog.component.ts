import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

interface addMesagge{
  severity:string;
  summary:string;
  detail:string;
}

interface messageConfirm{
  message:string;
  messageError:addMesagge;
}

@Component({
  selector: 'app-global-confirm-dialog',
  templateUrl: './global-confirm-dialog.component.html',
  styleUrls: ['./global-confirm-dialog.component.css']
})
export class GlobalConfirmDialogComponent {
  @Output() confirmed = new EventEmitter<void>();

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm1(funtionConfirm: Function,messages:messageConfirm) {
      this.confirmationService.confirm({
          message: messages.message,
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            funtionConfirm();
            this.confirmed.emit();
          },
          reject: (type: any) => {
              switch (type) {
                  case ConfirmEventType.REJECT:
                      this.messageService.add(messages.messageError);
                      break;
                  case ConfirmEventType.CANCEL:
                      this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                      break;
              }
          }
      });
  }
}
