import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameTileComponent } from './ui';
import { Game } from './interfaces';


@Component({
  selector: 'app-games-grid',
  standalone: true,
  imports: [CommonModule, GameTileComponent],
  templateUrl: './games-grid.component.html',
  styleUrl: './games-grid.component.css'
})
export class GamesGridComponent {
  mindGames: Game[] = [
    {
      name: 'Match Pairs',
      description: "A 'match pairs' game involves flipping cards to find matching pairs within a grid.",
      href: 'match-pairs'
    }
  ];;
}
