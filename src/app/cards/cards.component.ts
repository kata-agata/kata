import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mock-cards'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  card: Card = {
    id:1,
    title:'pierwsza moja karta'
  }

  cards=CARDS;

  constructor() { }

  ngOnInit() {}

}
