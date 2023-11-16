import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { Palette } from '@interfaces/Palette';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private root = inject(DOCUMENT).querySelector(':root') as HTMLStyleElement;

  setPalette(palette: Palette) {
    const rootStyles = getComputedStyle(this.root);

    this.root.style.setProperty('--primary-color', palette.primaryColor);
    this.root.style.setProperty('--secondary-color', palette.secondaryColor);
  }
}
