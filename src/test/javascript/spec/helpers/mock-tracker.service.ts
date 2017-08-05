import { SpyObject } from './spyobject';
import { BbTrackerService } from '../../../../main/webapp/app/shared/tracker/tracker.service';

export class MockTrackerService extends SpyObject {

    constructor() {
        super(BbTrackerService);
    }

    connect() {}
}
