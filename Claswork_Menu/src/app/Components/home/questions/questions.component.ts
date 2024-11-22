import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent() {
    this.componentSelected.emit('details');
  }
}
