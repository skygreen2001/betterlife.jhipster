import { Route } from '@angular/router';

import { BbHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: 'bb-health',
  component: BbHealthCheckComponent,
  data: {
    pageTitle: 'health.title'
  }
};
