import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  // styles: [
  //   `

  //   `
  // ]
  encapsulation: ViewEncapsulation.Emulated//encapsulate css to the component(default)
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean | undefined;
  @Output('change') change = new EventEmitter();
  onClick() { 
    this.isSelected = !this.isSelected;
    this.change.emit({newValue:this.isSelected});
  }
}

export interface FavoriteChangedEventArgs {
  newValue:boolean
}