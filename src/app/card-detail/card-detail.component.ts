import { Component, OnInit, Input } from '@angular/core';
import { Card } from "../card";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CardService} from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() card: Card;

  getCard():void{ // getCard must be before ngOnInit function where it is called
    const id= +this.route.snapshot.paramMap.get('id'); //+ convert string to number
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);//asynchronic method of binding
  }

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private cardService: CardService
  ) { }

  ngOnInit():void {
    this.getCard();
  }

goBack(): void{
  this.location.back(); //function of going back on button click
}

}
