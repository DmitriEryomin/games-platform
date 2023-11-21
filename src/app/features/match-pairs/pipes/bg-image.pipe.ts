import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgImage',
  standalone: true
})
export class BgImagePipe implements PipeTransform {

  transform(imgSrc: string): unknown {
    return `url(${imgSrc})`;
  }

}
