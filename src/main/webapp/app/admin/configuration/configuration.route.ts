import { Route } from '@angular/router';

import { BbConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: 'bb-configuration',
  component: BbConfigurationComponent,
  data: {
    pageTitle: 'configuration.title'
  }
};
