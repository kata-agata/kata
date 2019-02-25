import { Injectable } from '@angular/core';
import { Card } from './card';
import {CARDS} from './mock-cards';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  getCards(): Observable<Card[]>
  {
    this.messageService.add('CardService: fetched cards');
    return of(CARDS);
  }
  constructor(private messageService: MessageService) {

  }

  getCard(id:number):Observable<Card>{
    this.messageService.add(`CardService: fetched card with id=${id}`);
    return of(CARDS.find(card => card.id ===id));
  }
}
