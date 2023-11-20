import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, Input, inject } from '@angular/core';

import { Game } from '@features/games-grid/interfaces';

@Component({
  selector: 'app-game-tile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-tile.component.html',
  styleUrl: './game-tile.component.css'
})
export class GameTileComponent {
  @Input({ required: true }) game!: Game;

  private readonly router = inject(Router);

  play() {
    this.router.navigate([this.game.href]);
  }
}
