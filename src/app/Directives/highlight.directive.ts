import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighLightDirective {
  @Input('appHighlight') appHighlight = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.addBG(this.appHighlight || this.defaultColor || 'cyan');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.addBG('');
  }
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = this.appHighlight;
  }

  ngOnInit(): void {
    this.addColor(this.appHighlight);
  }
  private addColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

  private addBG(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
