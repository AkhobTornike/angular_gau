import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increase',
  standalone: true,
  imports: [],
  templateUrl: './increase.component.html',
  styleUrl: './increase.component.css'
})
export class IncreaseComponent {
  @Input() number!: number;
  @Output() numberChange = new EventEmitter<number>();

  addToCount() {
    this.number++;
    this.numberChange.emit(this.number);
  }
}
