import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/shared/shared.module";
import { GlobalConfirmDialogModule } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.module';

export const CrudModules = [
    CommonModule,
    TableModule,
    DialogModule,
    CardModule,
    DividerModule,
    ReactiveFormsModule,
    SharedModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    GlobalConfirmDialogModule
]