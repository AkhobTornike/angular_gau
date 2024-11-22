  import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
  })
  export class HeaderComponent implements OnInit {
    activeButton: any;
    @Output() sizeSelected = new EventEmitter<string>()

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {
      this.activeButton = this.el.nativeElement.querySelector('.control-button.desktop')
      if (this.activeButton) {
        this.renderer.addClass(this.activeButton, 'active') 
      }
    }

    changeResponsive(className: string, component: string) {
      this.sizeSelected.emit(component);
      if (this.activeButton) {
        this.renderer.removeClass(this.activeButton, 'active')
        this.activeButton = this.el.nativeElement.querySelector(`.${className}`)
        this.renderer.addClass(this.activeButton, 'active')   
      }
    }
  }
