import {Component} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularApp';

  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }
}
