import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // This directive allows the dropdown to close only when clicked on the dropdown again.
  // @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }
  // The below code works when you want the dropdown to close when clicking anywhere on the document.
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }
}
