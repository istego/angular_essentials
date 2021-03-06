import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]'
})
export class HighlightDirective {
  constructor(
    private el: ElementRef
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#b5f3ff');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
