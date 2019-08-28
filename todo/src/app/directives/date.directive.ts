import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
import { createElement } from '@angular/core/src/view/element';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
@Input()
private date: string;
private paragraph;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
   }

  @HostListener('mouseenter')
  mouse(event){
   this.paragraph.innerHTML = this.date;
   this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }
  @HostListener('mouseleave')
  mouseleave(event){
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }


}
