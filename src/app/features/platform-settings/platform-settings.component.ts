import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutDirective } from 'app/directives/main-layout.directive';
import { PaletteService } from '@services/palette.service';

@Component({
  selector: 'app-platform-settings',
  standalone: true,
  imports: [CommonModule, MainLayoutDirective],
  templateUrl: './platform-settings.component.html',
  styleUrl: './platform-settings.component.css',
})
export class PlatformSettingsComponent {
  private readonly paletteService = inject(PaletteService);

  setPalette(primaryColor: string, secondaryColor: string) {
    this.paletteService.setPalette({ primaryColor, secondaryColor });
  }
}
