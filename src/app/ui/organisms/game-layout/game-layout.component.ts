import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-layout.component.html',
  styleUrl: './game-layout.component.css',
})
export class GameLayoutComponent {
  @Input({ required: true }) title!: string;

  @Input({ required: true }) description!: string;
}
