import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '**', redirectTo: '/home' },
    {
        path: 'home', component: HomeComponent,
        loadChildren: () => import('./pages/home/home.module').then((c) => c.HomeModule),
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);