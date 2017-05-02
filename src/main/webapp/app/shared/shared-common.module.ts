import { NgModule, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateService } from 'ng2-translate';
import { AlertService } from 'ng-jhipster';


import {
    BbSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    BbAlertComponent,
    BbAlertErrorComponent
} from './';


export function alertServiceProvider(sanitizer: Sanitizer, translateService: TranslateService) {
    // set below to true to make alerts look like toast
    let isToast = false;
    return new AlertService(sanitizer, isToast, translateService);
}

@NgModule({
    imports: [
        BbSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        BbAlertComponent,
        BbAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        {
            provide: AlertService,
            useFactory: alertServiceProvider,
            deps: [Sanitizer, TranslateService]
        },
        Title
    ],
    exports: [
        BbSharedLibsModule,
        FindLanguageFromKeyPipe,
        BbAlertComponent,
        BbAlertErrorComponent
    ]
})
export class BbSharedCommonModule {}
