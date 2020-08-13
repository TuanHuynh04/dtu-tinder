import { CardsBoxComponent } from './components/recs/cards-box/cards-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RecsComponent } from './components/recs/recs.component';
import { HeaderBoxComponent } from './components/recs/header-box/header-box.component';
import { ReactionBoxComponent } from './components/recs/reaction-box/reaction-box.component';


@NgModule({
  declarations: [RecsComponent, HeaderBoxComponent, ReactionBoxComponent, CardsBoxComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
