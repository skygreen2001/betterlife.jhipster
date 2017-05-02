import { Directive, OnInit, ElementRef, Renderer, Input} from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate';

@Directive({
    selector: '[bbActiveMenu]'
})
export class ActiveMenuDirective implements OnInit {
    @Input() bbActiveMenu: string;

    constructor(private el: ElementRef, private renderer: Renderer, private translateService: TranslateService) {}

    ngOnInit() {
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
         this.updateActiveFlag(event.lang);
      });
      this.updateActiveFlag(this.translateService.currentLang);
    }

    updateActiveFlag(selectedLanguage) {
      if (this.bbActiveMenu === selectedLanguage) {
          this.renderer.setElementClass(this.el.nativeElement, 'active', true);
      } else {
          this.renderer.setElementClass(this.el.nativeElement, 'active', false);
      }
    }
}
