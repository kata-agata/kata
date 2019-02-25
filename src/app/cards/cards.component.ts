import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  getCards(): void{
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  constructor(private cardService: CardService) {  }

  ngOnInit() {
    this.getCards();
  }

}
