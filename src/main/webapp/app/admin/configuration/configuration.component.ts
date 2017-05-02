import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

import { BbConfigurationService } from './configuration.service';

@Component({
    selector: 'bb-configuration',
    templateUrl: './configuration.component.html'
})
export class BbConfigurationComponent implements OnInit {
    allConfiguration: any = null;
    configuration: any = null;
    configKeys: any[];
    filter: string;
    orderProp: string;
    reverse: boolean;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private configurationService: BbConfigurationService
    ) {
        this.jhiLanguageService.setLocations(['configuration']);
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }

    keys(dict): Array<string> {
        return (dict === undefined) ? [] : Object.keys(dict);
    }

    ngOnInit() {
        this.configurationService.get().subscribe((configuration) => {
            this.configuration = configuration;

            for (let config of configuration) {
                if (config.properties !== undefined) {
                    this.configKeys.push(Object.keys(config.properties));
                }
            }
        });

        this.configurationService.getEnv().subscribe((configuration) => {
            this.allConfiguration = configuration;
        });
    }
}
