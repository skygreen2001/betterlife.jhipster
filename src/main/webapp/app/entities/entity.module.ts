import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BbBlogModule } from './blog/blog.module';
import { BbEntryModule } from './entry/entry.module';
import { BbTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BbBlogModule,
        BbEntryModule,
        BbTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BbEntityModule {}
