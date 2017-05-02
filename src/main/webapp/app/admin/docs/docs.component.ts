import { Component } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'bb-docs',
    templateUrl: './docs.component.html'
})
export class BbDocsComponent {
    constructor (
        private jhiLanguageService: JhiLanguageService
    ) {
        this.jhiLanguageService.setLocations(['global']);
    }
}
