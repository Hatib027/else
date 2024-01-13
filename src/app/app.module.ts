import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './global/register/register.component';
import { LoginComponent } from './global/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { NavbarComponent } from './global/navbar/navbar.component';
import { VerifyOtpComponent } from './global/verify-otp/verify-otp.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReferHomeComponent } from './user/refer-home/refer-home.component';
import { UserDataComponent } from './admin/user-data/user-data.component';
import { PaymentComponent } from './user/payment/payment.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReferEarningHistoryComponent } from './user/refer-earning-history/refer-earning-history.component';
import { PaymentHomeComponent } from './user/payment-home/payment-home.component';
import { BankdetailsAdminComponent } from './admin/bankdetails-admin/bankdetails-admin.component';
import { PaymentListComponent } from './admin/payment-list/payment-list.component';
import { PaymentViewComponent } from './admin/payment-view/payment-view.component';
import { WithdrawlListComponent } from './user/withdrawl-list/withdrawl-list.component';
import { ReferPercentageComponent } from './admin/refer-percentage/refer-percentage.component';
import { PaymentViewUpiComponent } from './admin/payment-view-upi/payment-view-upi.component';
import { UpiActionComponent } from './admin/upi-action/upi-action.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { WithdrawHomeComponent } from './user/withdraw/withdraw-home/withdraw-home.component';
import { UserWithdrawlComponent } from './admin/user-withdrawl/user-withdrawl.component';
import { WithdrawlIbViewComponent } from './admin/withdrawl-ib-view/withdrawl-ib-view.component';
import { WithdrawlUpiViewComponent } from './admin/withdrawl-upi-view/withdrawl-upi-view.component';
import { VerifyEmailComponent } from './global/verify-email/verify-email.component';
import { VerifyPassComponent } from './global/verify-pass/verify-pass.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { CreateOfferComponent } from './admin/create-offer/create-offer.component';
import { EventsDeleteComponent } from './admin/events-delete/events-delete.component';
import { OffersDeleteComponent } from './admin/offers-delete/offers-delete.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { OfferComponent } from './user/offer/offer.component';
import { EventsComponent } from './user/events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminhomeComponent,
    UserhomeComponent,
    NavbarComponent,
    VerifyOtpComponent,
    ReferHomeComponent,
    UserDataComponent,
    PaymentComponent,
    ReferEarningHistoryComponent,
    PaymentHomeComponent,
    BankdetailsAdminComponent,
    PaymentListComponent,
    PaymentViewComponent,
    WithdrawlListComponent,
    ReferPercentageComponent,
    PaymentViewUpiComponent,
    UpiActionComponent,
    WithdrawHomeComponent,
    UserWithdrawlComponent,
    WithdrawlIbViewComponent,
    WithdrawlUpiViewComponent,
    VerifyEmailComponent,
    VerifyPassComponent,
    CreateEventComponent,
    CreateOfferComponent,
    EventsDeleteComponent,
    OffersDeleteComponent,
    ReportsComponent,
    OfferComponent,
    EventsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    MatExpansionModule,
    ClipboardModule,
    NgxPaginationModule,
    MatNativeDateModule, MatDatepickerModule, MatSelectModule,
    MatTabsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot(
      {
        showForeground: true,
      }
    ),
  ],
  providers: [[authInterceptorProviders, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }], BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
