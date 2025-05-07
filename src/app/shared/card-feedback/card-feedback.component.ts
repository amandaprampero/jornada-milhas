import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-feedback',
  templateUrl: './card-feedback.component.html',
  styleUrls: ['./card-feedback.component.scss']
})
export class CardFeedbackComponent {
  @Input() src: string = ''
  @Input() depoimento: string = ''
  @Input() nome: string = ''
}
