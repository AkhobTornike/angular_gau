import { Component } from '@angular/core';
import { IncreaseComponent } from "./increase/increase.component";
import { DecreaseComponent } from "./decrease/decrease.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [IncreaseComponent, DecreaseComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  number:number = 0
  numberColor:string = 'default'

  onNumberChange(newNumber: number) {
    if(newNumber === 0)
    {
      this.numberColor = 'default';
    }
    else if (newNumber > 0)
    {
      this.numberColor = 'hightnumber';
    }
    else
    {
      this.numberColor = 'lownumber';
    }
    this.number = newNumber;
  }
}
