import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() parentData:string = '';
  @Output() sentMessage = new EventEmitter<string>();

  norifyParent() {
    this.sentMessage.emit('Message from child');
  }
}
