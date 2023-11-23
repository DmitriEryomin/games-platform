import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

export interface Item {
  id: number;
  name: string;
  flipped: boolean;
  imgSrc: string;
  solved: boolean;
}

const flipBackTimeout = 750;
const prepareTimeout = 1800;

@Injectable()
export class MatchPairsGameService {
  public items: WritableSignal<Item[]> = signal([]);

  public allSolved = computed(
    () => this.items().length > 0 && this.items().every((item) => item.solved)
  );

  private farmAnimals = ['chicken', 'cow', 'duck', 'horse', 'pig', 'rooster'];

  private currentCollection: string[] | undefined;

  private runningTask: boolean = false;

  private flippedItem: Item | null = null;

  public start() {
    this.currentCollection = this.farmAnimals;
    this.createPairs().shuffleItems().setItems();

    setTimeout(() => {
      this.items.update((items) =>
        items.map((item) => ({ ...item, flipped: false }))
      );
    }, prepareTimeout);
  }

  public flip(index: number) {
    const { [index]: currentItem } = this.items();

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
      this.flippedItem.solved = true;
      currentItem.solved = true;
      this.flippedItem = null;
    }

    this.items.update((items) => [...items]);
  }

  private createPairs() {
    if (!this.currentCollection) {
      throw new Error('Current collection is not defined');
    }

    this.currentCollection = [
      ...this.currentCollection,
      ...this.currentCollection,
    ];

    return this;
  }

  private shuffleItems() {
    if (!this.currentCollection) {
      throw new Error('Current collection is not defined');
    }

    for (let i = this.currentCollection.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.currentCollection[i], this.currentCollection[j]] = [
        this.currentCollection[j],
        this.currentCollection[i],
      ];
    }

    return this;
  }

  private setItems() {
    if (!this.currentCollection) {
      throw new Error('Current collection is not defined');
    }

    this.items.set(
      this.currentCollection.map((itemName, index) => ({
        id: index,
        name: itemName,
        flipped: true,
        imgSrc: `assets/images/match-pair/${itemName}.png`,
        solved: false,
      }))
    );
  }
}
