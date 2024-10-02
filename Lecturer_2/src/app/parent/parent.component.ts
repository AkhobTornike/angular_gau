import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name:string = 'Parent';

  className:string = 'bg';
  vanishButton:string = 'btn';
  message:string = 'toko';

  myText:string = this.message;


  changeColor(): void {
    this.className = 'light_bg'
    this.vanishButton = 'vanish_btn'
  }

  getMessage(event: string): void {
    this.myText = event;   
  }
} 
