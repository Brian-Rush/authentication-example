import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  {
  path: '',
  component: PublicComponent
  },
  {
  path: 'private',
  component: PrivateComponent,
  canActivate: [AuthGuardService]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
