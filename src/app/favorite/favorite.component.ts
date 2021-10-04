import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean | undefined;

  onClick() { 
    this.isSelected = !this.isSelected;
  }
}