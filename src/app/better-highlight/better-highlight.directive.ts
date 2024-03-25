import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  // HostBinding is a much easier way to set styles and access the DOM element
  // properties than renderer. Here, 'background-color' is in camelCase since
  // DOM elements donot understand dashes.
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.fontFamily') fontFamily: string = 'Monotype Corsiva';
  
  // Renderer is the right way to access the DOM element instead of directly
  // accessing the nativeElement.
  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
      //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow')
      this.backgroundColor = this.highlightColor;
      this.fontFamily = 'Times New Roman';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.backgroundColor = this.defaultColor;
    this.fontFamily = 'Cursive';
  }

}
