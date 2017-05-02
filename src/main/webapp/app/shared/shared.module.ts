import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
    BbSharedLibsModule,
    BbSharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    BbSocialComponent,
    SocialService,
    BbLoginModalComponent
} from './';

@NgModule({
    imports: [
        BbSharedLibsModule,
        BbSharedCommonModule
    ],
    declarations: [
        BbSocialComponent,
        BbLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        SocialService,
        AuthService,
        UserService,
        DatePipe
    ],
    entryComponents: [BbLoginModalComponent],
    exports: [
        BbSharedCommonModule,
        BbSocialComponent,
        BbLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BbSharedModule {}
