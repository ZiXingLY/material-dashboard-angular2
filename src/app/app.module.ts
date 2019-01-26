import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {PassportComponent} from './layouts/passport/passport.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SnackbarService} from './services/snackbar.service';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import {SweetHttpService} from './services/sweet-http.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        PassportComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SweetHttpService, multi: true},
        SnackbarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
