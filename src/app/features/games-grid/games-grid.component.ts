import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameTileComponent } from './ui';
import { MainLayoutDirective } from 'app/directives/main-layout.directive';

@Component({
  selector: 'app-games-grid',
  standalone: true,
  imports: [CommonModule, GameTileComponent, MainLayoutDirective],
  templateUrl: './games-grid.component.html',
  styleUrl: './games-grid.component.css'
})
export class GamesGridComponent {}
