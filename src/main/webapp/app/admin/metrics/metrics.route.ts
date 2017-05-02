import { Route } from '@angular/router';

import { BbMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: 'bb-metrics',
  component: BbMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
