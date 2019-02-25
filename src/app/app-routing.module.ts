import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import {CardsComponent} from './cards/cards.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardDetailComponent} from './card-detail/card-detail.component';

const routes: Routes=[
  {path: 'cards', component: CardsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'detail/:id', component: CardDetailComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})


export class AppRoutingModule { }
