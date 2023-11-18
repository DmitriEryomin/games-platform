import { Component, inject } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import { Palette } from '@features/platform-settings/interfaces';
import { ColorPaletteItemComponent } from '../../molecules';

const HighContrastThemes: Palette[] = [
  {
    name: 'Coral Blue',
    primaryColor: 'oklch(97.94% 0.04 103)',
    secondaryColor: 'oklch(54.31% 0.1 195)',
  },
  {
    name: "Picasso Blue",
    primaryColor: '#1e90ff',
    secondaryColor: '#212329',
  },
  {
    name: "Picasso Pink",
    primaryColor: '#5e2e21',
    secondaryColor: '#ee82ee',
  },
];

const DarkThemes: Palette[] = [
  {
    name: 'Violet Dreams',
    primaryColor: '#212121',
    secondaryColor: '#9a66b3',
  },
];

const LightThemes: Palette[] = [
  {
    name: 'Newspaper',
    primaryColor: '#f5f5f5',
    secondaryColor: '#232323',
  },
];

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule, ColorPaletteItemComponent],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.css',
})
export class ColorPaletteComponent {
  highContrastThemes = HighContrastThemes;
  darkThemes = DarkThemes;
  lightThemes = LightThemes;
}
