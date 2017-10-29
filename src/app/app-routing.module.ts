import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Error Components
import { NotFoundComponent } from './errors/not-found/not-found.component';

// Landing Components
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoorsComponent } from './pages/products/doors/doors.component';
import { MachineryComponent } from './pages/products/machinery/machinery.component';
import { LegosComponent } from './pages/products/legos/legos.component';

// Auth Components
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';

// Quotation Components
import { QuotationComponent } from './pages/quotation/quotation.component';
import { DoorsQuotationComponent } from './pages/quotation/doors-quotation/doors-quotation.component';
import { MachineryQuotationComponent } from './pages/quotation/machinery-quotation/machinery-quotation.component';
import { LegosQuotationComponent } from './pages/quotation/legos-quotation/legos-quotation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'products/doors', component: DoorsComponent },
  { path: 'products/machinery', component: MachineryComponent },
  { path: 'products/legos', component: LegosComponent },

  {
    path: 'quotation',
    component: QuotationComponent,
    children: [
      { path: '', redirectTo: 'doors', pathMatch: 'full' },
      { path: 'doors', component: DoorsQuotationComponent },
      { path: 'machinery', component: MachineryQuotationComponent },
      { path: 'legos', component: LegosQuotationComponent }
    ]
  },

  { path: 'auth/forgot', component: ForgotComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/reset', component: ResetComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
