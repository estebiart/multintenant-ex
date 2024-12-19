import { Routes } from '@angular/router';
import { Tenant1Component } from './tenants/tenant1/tenant1.component';
import { Tenant2Component } from './tenants/tenant2/tenant2.component';
import { NotFoundComponent } from './not-found/not-found.component'; // Asegúrate de tener un componente para manejar rutas no encontradas

const subdomain = window.location.hostname.split('.')[0];

console.log('Subdomain detected:', subdomain);

export const tenant1Routes: Routes = [
  { path: '', component: Tenant1Component },
  // { path: 'about', component: Tenant1AboutComponent },
  // { path: 'contact', component: Tenant1ContactComponent },
];

export const tenant2Routes: Routes = [
  { path: '', component: Tenant2Component },
  // { path: 'about', component: Tenant2AboutComponent },
  // { path: 'contact', component: Tenant2ContactComponent },
];

export const routes: Routes = [];

switch (subdomain) {
    case 'tenant1':
      routes.push(...tenant1Routes);
      break;
    case 'tenant2':
      routes.push(...tenant2Routes);
      break;
    default:
      // Redirigir a una página de error o una página predeterminada
      routes.push({ path: '**', component: NotFoundComponent });
      break;
  }