import { Routes } from '@angular/router';

import { GamesGridComponent } from './features/games-grid/games-grid.component';

export const routes: Routes = [
  {
    path: '',
    component: GamesGridComponent,
  },
  {
    path: 'settings',
    loadComponent: () => import(
      './features/platform-settings/platform-settings.component'
    ).then((c) => c.PlatformSettingsComponent),
  },
];
