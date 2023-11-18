import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutDirective } from 'app/directives/main-layout.directive';

import { ColorPaletteComponent } from './ui/organisms';

@Component({
  selector: 'app-platform-settings',
  standalone: true,
  imports: [CommonModule, MainLayoutDirective, ColorPaletteComponent],
  templateUrl: './platform-settings.component.html',
  styleUrl: './platform-settings.component.css',
})
export class PlatformSettingsComponent {}
