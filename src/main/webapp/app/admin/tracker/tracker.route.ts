import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { BbTrackerComponent } from './tracker.component';
import { BbTrackerService, Principal } from '../../shared';

export const trackerRoute: Route = {
    path: 'bb-tracker',
    component: BbTrackerComponent,
    data: {
        pageTitle: 'tracker.title'
    }
};
