import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

export const AdminRoutes = RouterModule.forChild(routes);
