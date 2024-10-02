import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-decrease',
  standalone: true,
  imports: [],
  templateUrl: './decrease.component.html',
  styleUrl: './decrease.component.css'
})
export class DecreaseComponent {
  @Input() number!: number;
  @Output() numberChange = new EventEmitter<number>();

  minusToCount() {
    this.number--;
    this.numberChange.emit(this.number);
  }
}
