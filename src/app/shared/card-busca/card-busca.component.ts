import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() src: string = ''
  @Input() alt: string = ''
  @Input() local: string = ''
  @Input() valor: string = ''
}
