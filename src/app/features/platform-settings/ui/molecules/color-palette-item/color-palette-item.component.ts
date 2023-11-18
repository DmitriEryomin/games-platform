import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { PaletteService } from '@services/palette-service';
import { Palette } from '@features/platform-settings/interfaces';

@Component({
  selector: 'app-color-palette-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-palette-item.component.html',
  styleUrl: './color-palette-item.component.css',
})
export class ColorPaletteItemComponent {
  private readonly paletteService = inject(PaletteService);

  @Input({ required: true }) palette!: Palette;

  setPalette() {
    this.paletteService.setPalette(this.palette);
  }
}
