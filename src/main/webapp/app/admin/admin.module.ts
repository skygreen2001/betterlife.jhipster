import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BbSharedModule } from '../shared';

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    BbMetricsMonitoringModalComponent,
    BbMetricsMonitoringComponent,
    BbHealthModalComponent,
    BbHealthCheckComponent,
    BbConfigurationComponent,
    BbDocsComponent,
    AuditsService,
    BbConfigurationService,
    BbHealthService,
    BbMetricsService,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService
} from './';


@NgModule({
    imports: [
        BbSharedModule,
        RouterModule.forRoot(adminState, { useHash: true })
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserDialogComponent,
        UserDeleteDialogComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        BbConfigurationComponent,
        BbHealthCheckComponent,
        BbHealthModalComponent,
        BbDocsComponent,
        BbMetricsMonitoringComponent,
        BbMetricsMonitoringModalComponent
    ],
    entryComponents: [
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        BbHealthModalComponent,
        BbMetricsMonitoringModalComponent,
    ],
    providers: [
        AuditsService,
        BbConfigurationService,
        BbHealthService,
        BbMetricsService,
        LogsService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BbAdminModule {}
