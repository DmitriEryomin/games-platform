import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Game } from '@features/games-grid/interfaces';

@Component({
  selector: 'app-game-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-tile.component.html',
  styleUrl: './game-tile.component.css'
})
export class GameTileComponent {
  @Input({ required: true }) game!: Game;
}
