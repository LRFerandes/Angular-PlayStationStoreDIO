import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input()
  imagem : string = "";

  @Input()
  Price : string = "";

  @Input()
  Type : string = "";

  @Input()
  Label : string = "";
}
