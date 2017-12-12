import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[rkmZippy]'
})
export class ZippyDirective {

  showContent: boolean = false;

  constructor() { }

  @HostListener('click') onShowContent(){
      this.showContent = !this.showContent;

      console.log("Zippy directive: ShowContent", this.showContent)
  }




}
