import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @description parent element should have position: relative
 */
@Component({
  selector: 'app-win-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './win-screen.component.html',
  styleUrl: './win-screen.component.css'
})
export class WinScreenComponent {

  @Output() playAgain: EventEmitter<void> = new EventEmitter();
}
