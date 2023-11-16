import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaletteService } from '@services/palette.service';

@Component({
  selector: 'app-game-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-tile.component.html',
  styleUrl: './game-tile.component.css'
})
export class GameTileComponent {
  paletteService = inject(PaletteService);
}
