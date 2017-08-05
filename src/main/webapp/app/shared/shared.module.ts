import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    BbSharedLibsModule,
    BbSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    BbTrackerService,
    HasAnyAuthorityDirective,
    BbLoginModalComponent
} from './';

@NgModule({
    imports: [
        BbSharedLibsModule,
        BbSharedCommonModule
    ],
    declarations: [
        BbLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        BbTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [BbLoginModalComponent],
    exports: [
        BbSharedCommonModule,
        BbLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BbSharedModule {}
