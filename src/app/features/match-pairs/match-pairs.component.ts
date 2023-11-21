import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameLayoutComponent } from '@ui/organisms/game-layout/game-layout.component';
import { BgImagePipe } from './pipes/bg-image.pipe';

interface Item {
  id: number;
  name: string;
  flipped: boolean;
  imgSrc: string;
  solved: boolean;
}

const flipBackTimeout = 750;

@Component({
  selector: 'app-match-pairs',
  standalone: true,
  imports: [CommonModule, GameLayoutComponent, BgImagePipe],
  templateUrl: './match-pairs.component.html',
  styleUrl: './match-pairs.component.css',
})
export class MatchPairsComponent {
  title = 'Match Pairs';

  description =
    'A "match pairs" memory game is a classic concentration game where players need to find matching pairs of cards within a set of face-down cards. The cards are shuffled and placed in a grid formation with their faces hidden. Players take turns flipping over two cards at a time, trying to remember the positions of the symbols or images on the cards. The goal is to find all the matching pairs by remembering where each card is located. It\'s a game that tests and enhances memory, focus, and cognitive skills while being enjoyable and engaging for all ages.';

  items: Item[] = [
    {
      id: 1,
      name: 'chicken',
      imgSrc: 'assets/images/match-pair/chicken.png',
      flipped: false,
      solved: false,
    },
    {
      id: 2,
      name: 'cow',
      imgSrc: 'assets/images/match-pair/cow.png',
      flipped: false,
      solved: false,
    },
    {
      id: 3,
      name: 'duck',
      imgSrc: 'assets/images/match-pair/duck.png',
      flipped: false,
      solved: false,
    },
    {
      id: 4,
      name: 'horse',
      imgSrc: 'assets/images/match-pair/horse.png',
      flipped: false,
      solved: false,
    },
    {
      id: 5,
      name: 'pig',
      imgSrc: 'assets/images/match-pair/pig.png',
      flipped: false,
      solved: false,
    },
    {
      id: 6,
      name: 'rooster',
      imgSrc: 'assets/images/match-pair/rooster.png',
      flipped: false,
      solved: false,
    },
  ];

  private flippedItem: Item | null = null;

  private runningTask: boolean = false;

  flip(index: number) {
    const { [index]: currentItem } = this.items;

    if (currentItem.solved || this.runningTask) {
      return;
    }

    currentItem.flipped = true;

    if (this.flippedItem === null) {
      this.flippedItem = currentItem;
    } else if (this.flippedItem.name !== currentItem.name) {
      this.runningTask = true;
      setTimeout(() => {
        this.flippedItem!.flipped = false;
        currentItem.flipped = false;
        this.flippedItem = null;
        this.runningTask = false;
      }, flipBackTimeout);
    } else {
      this.flippedItem = null;
    }
  }
}
