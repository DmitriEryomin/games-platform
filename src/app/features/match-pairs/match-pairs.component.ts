import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameLayoutComponent } from '@ui/organisms/game-layout/game-layout.component';
import { WinScreenComponent } from '@ui/molecules/win-screen/win-screen.component';

import { MatchPairsGameService } from '../../match-pairs/services/match-pairs-game.service';
import { BgImagePipe } from './pipes/bg-image.pipe';

@Component({
  selector: 'app-match-pairs',
  standalone: true,
  providers: [MatchPairsGameService],
  imports: [CommonModule, GameLayoutComponent, BgImagePipe, WinScreenComponent],
  templateUrl: './match-pairs.component.html',
  styleUrl: './match-pairs.component.css',
})
export class MatchPairsComponent {
  gameService = inject(MatchPairsGameService);

  title = 'Match Pairs';

  description =
    'A "match pairs" memory game is a classic concentration game where players need to find matching pairs of cards within a set of face-down cards. The cards are shuffled and placed in a grid formation with their faces hidden. Players take turns flipping over two cards at a time, trying to remember the positions of the symbols or images on the cards. The goal is to find all the matching pairs by remembering where each card is located. It\'s a game that tests and enhances memory, focus, and cognitive skills while being enjoyable and engaging for all ages.';

  gameStarted: boolean = false;

  gameFinished: boolean = true;

  public start() {
    this.gameStarted = true;
    this.gameService.start();
  }
}
