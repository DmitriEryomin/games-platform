import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMainLayout]',
  standalone: true
})
export class MainLayoutDirective {
  @HostBinding('class') className = 'main-layout';
}
