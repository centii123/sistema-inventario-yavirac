import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() ruta!:string;
  @Input() rutaImg!:string;
  @Input() titulo!:string;
  @Input() descripcion!:string
}
