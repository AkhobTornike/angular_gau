import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  @Output() componentSelected = new EventEmitter<string>();
  activeButton: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {
      this.activeButton = this.el.nativeElement.querySelector('.details')
      if (this.activeButton) {
        this.renderer.addClass(this.activeButton, 'active') 
      }
    }

  selectComponent(component: string) {
    this.componentSelected.emit(component);
    if (this.activeButton) {
      this.renderer.removeClass(this.activeButton, 'active')
      this.activeButton = this.el.nativeElement.querySelector(`.${component}`)
      this.renderer.addClass(this.activeButton, 'active')   
    }
  }
}
