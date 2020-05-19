import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  {path: 'share', component: SharedComponent},
  {
    path: 'quizecard',
    loadChildren: () => import('./quiz-card/quiz-card.component').then(m => m.QuizCardModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
