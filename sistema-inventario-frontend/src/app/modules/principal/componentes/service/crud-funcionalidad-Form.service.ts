import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { CrudService } from './crud.service';
import { MessageService } from 'primeng/api';

interface WithUpdatedAt {
    updatedAt: string;
}

@Injectable({
    providedIn: 'root'
})
export class CrudFuncionalidadFormService<tipo extends WithUpdatedAt> {
    loadingSpiner!: boolean;
    form!: FormGroup;
    list: tipo[] = [];
    modal: boolean = false;
    selected: tipo | null = null;

    //otras variables
    dataDrop!: any[];
    loadingSpinerForm!: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private crudService: CrudService,
        private messageService: MessageService
    ) {
    }


    initForm(estructura:any): FormGroup {
        return this.formBuilder.group(estructura);
    }

    load() {
        this.loadingSpiner = true
        this.crudService.getAll().subscribe({
            next: (data: tipo[]) => {
                this.list = data;
                this.list.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
                this.loadingSpiner = false
            },
            error: error => {
                this.loadingSpiner = false
            }
        });
    }



    save() {
        if (this.form.invalid) {
            return;
        }

        const registro: any = this.form.value;

        if (registro.id) {

            this.crudService.update(registro).subscribe({
                next: () => {
                    this.resetForm();
                    this.load();
                    this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Registro actualizado exitosamente!' });
                },
                error: error => {
                }
            });
        } else {

            this.crudService.add(registro).subscribe({
                next: () => {
                    this.resetForm();
                    this.load();
                    this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
                },
                error: error => {
                }
            });
        }

        this.modal = false;
    }

    resetForm() {
        this.form.reset();
        this.selected = null;
    }

    cancel() {
        this.resetForm();
        this.modal = false;
    }

    openModal() {
        this.modal = true;
    }

    closeModal() {
        this.modal = false;
    }
}