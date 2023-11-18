import { DOCUMENT } from '@angular/common';
import { Injectable, OnInit, WritableSignal, effect, inject, signal } from '@angular/core';

import { Palette } from '../../features/platform-settings/interfaces';

const defaultPalette: Palette = {
  name: 'Coral Blue',
  primaryColor: 'oklch(97.94% 0.04 103)',
  secondaryColor: 'oklch(54.31% 0.1 195)',
};

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private root = inject(DOCUMENT).querySelector(':root') as HTMLStyleElement;

  palette: WritableSignal<Palette>;

  constructor() {
    const savedPalette = localStorage.getItem('palette');
    this.palette = signal(savedPalette ? JSON.parse(savedPalette) : defaultPalette);

    effect(() => {
      this.changeRootStyles(this.palette());
      this.saveInLocalStorage(this.palette());
    });
  }

  setPalette(palette: Palette) {
    this.palette.set(palette);
  }

  private changeRootStyles({ primaryColor, secondaryColor }: Palette) {
    this.root.style.setProperty('--primary-color', primaryColor);
    this.root.style.setProperty('--secondary-color', secondaryColor);
  }

  private saveInLocalStorage(palette: Palette) {
    localStorage.setItem('palette', JSON.stringify(palette));
  }
}
