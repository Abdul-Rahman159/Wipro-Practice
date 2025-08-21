import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightStrikethru]',
  standalone: true
})
export class HighlightStrikethruDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
  }
}
