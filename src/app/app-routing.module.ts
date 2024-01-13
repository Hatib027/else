import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './global/register/register.component';
import { LoginComponent } from './global/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminGuardGuard } from './guard/admin-guard.guard';
import { LoginGuard } from './guard/login.guard';
import { VerifyOtpComponent } from './global/verify-otp/verify-otp.component';
import { VerifyotpGuard } from './guard/verifyotp.guard';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserGuardGuard } from './guard/user-guard.guard';
import { ReferHomeComponent } from './user/refer-home/refer-home.component';
import { UserDataComponent } from './admin/user-data/user-data.component';
import { PaymentComponent } from './user/payment/payment.component';
import { ReferEarningHistoryComponent } from './user/refer-earning-history/refer-earning-history.component';
import { PaymentHomeComponent } from './user/payment-home/payment-home.component';
import { BankdetailsAdminComponent } from './admin/bankdetails-admin/bankdetails-admin.component';
import { PaymentListComponent } from './admin/payment-list/payment-list.component';
import { PaymentViewComponent } from './admin/payment-view/payment-view.component';
import { WithdrawlListComponent } from './user/withdrawl-list/withdrawl-list.component';
import { ReferPercentageComponent } from './admin/refer-percentage/refer-percentage.component';
import { PaymentViewUpiComponent } from './admin/payment-view-upi/payment-view-upi.component';
import { UpiActionComponent } from './admin/upi-action/upi-action.component';
import { WithdrawHomeComponent } from './user/withdraw/withdraw-home/withdraw-home.component';
import { UserWithdrawlComponent } from './admin/user-withdrawl/user-withdrawl.component';
import { WithdrawlUpiViewComponent } from './admin/withdrawl-upi-view/withdrawl-upi-view.component';
import { WithdrawlIbViewComponent } from './admin/withdrawl-ib-view/withdrawl-ib-view.component';
import { VerifyEmailComponent } from './global/verify-email/verify-email.component';
import { ChangePasswordComponent } from './global/change-password/change-password.component';
import { VerifyPassComponent } from './global/verify-pass/verify-pass.component';
import { OffersDeleteComponent } from './admin/offers-delete/offers-delete.component';
import { CreateOfferComponent } from './admin/create-offer/create-offer.component';
import { EventsDeleteComponent } from './admin/events-delete/events-delete.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { EventsComponent } from './user/events/events.component';
import { OfferComponent } from './user/offer/offer.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: "full"

  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    pathMatch: "full"
  },
  {
    path: 'change-password/:id',
    component: VerifyPassComponent
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
    canActivate: [VerifyotpGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'refer',
    component: ReferHomeComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'payment-form',
    component: PaymentComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'payment-home',
    component: PaymentHomeComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'event-details',
    component: EventsComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'offer-details',
    component: OfferComponent,
    canActivate: [UserGuardGuard]
  },
  {

    path: 'refer-earning',
    component: ReferEarningHistoryComponent,
    canActivate: [UserGuardGuard]
  },
  {

    path: 'withdrawl-details',
    component: WithdrawlListComponent,
    canActivate: [UserGuardGuard]
  },
  {

    path: 'withdrawl-home',
    component: WithdrawHomeComponent,
    canActivate: [UserGuardGuard]
  },


  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/user-list',
    component: UserDataComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/payment-list',
    component: PaymentListComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/withdrawl-list',
    component: UserWithdrawlComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/payment-view/:id',
    component: PaymentViewComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/payment-upi-view/:id',
    component: PaymentViewUpiComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/create-event',
    component: CreateEventComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/event-list',
    component: EventsDeleteComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/report-list',
    component: ReportsComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/create-offer',
    component: CreateOfferComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/offer-list',
    component: OffersDeleteComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/withdrawl-upi-view/:id',
    component: WithdrawlUpiViewComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/withdrawl-Ib-view/:id',
    component: WithdrawlIbViewComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/add-bank-admin',
    component: BankdetailsAdminComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/refer-percentage',
    component: ReferPercentageComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/upi-action',
    component: UpiActionComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: '',
    component: UserhomeComponent,
    canActivate: [UserGuardGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
