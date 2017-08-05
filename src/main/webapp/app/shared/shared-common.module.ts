import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { WindowRef } from './tracker/window.service';
import {
    BbSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    BbAlertComponent,
    BbAlertErrorComponent
} from './';

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
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'zh-cn'
        },
    ],
    exports: [
        BbSharedLibsModule,
        FindLanguageFromKeyPipe,
        BbAlertComponent,
        BbAlertErrorComponent
    ]
})
export class BbSharedCommonModule {}
