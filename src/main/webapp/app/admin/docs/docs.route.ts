import { Route } from '@angular/router';

import { BbDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: 'docs',
  component: BbDocsComponent,
  data: {
    pageTitle: 'global.menu.admin.apidocs'
  }
};
