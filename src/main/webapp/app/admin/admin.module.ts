import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BbTrackerService } from './../shared/tracker/tracker.service';

import { BbSharedModule } from '../shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

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
    BbTrackerComponent,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService
} from './';

@NgModule({
    imports: [
        BbSharedModule,
        RouterModule.forRoot(adminState, { useHash: true }),
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
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
        BbTrackerComponent,
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
        BbTrackerService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BbAdminModule {}
