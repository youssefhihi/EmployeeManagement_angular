import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
 @HostListener('mouseenter') onMouseEnter() {
    this.applyHighlight('scale(1.05)', '0.8', 'blur(4px)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyHighlight('scale(1)', '0', 'blur(0)');
  }

  private applyHighlight(transform: string, opacity: string, blur: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease');
    const overlay = this.el.nativeElement.querySelector('.highlight-overlay');
    if (overlay) {
      this.renderer.setStyle(overlay, 'opacity', opacity);
      this.renderer.setStyle(overlay, 'filter', blur);
      this.renderer.setStyle(overlay, 'transition', 'opacity 0.3s, filter 0.3s');
    }
  }
}
