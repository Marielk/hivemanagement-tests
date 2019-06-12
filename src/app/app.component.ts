import { Component } from '@angular/core';
import { versionUpdateService } from './services/update-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hivemanagement-tests';

  constructor( private versionService: versionUpdateService,){
    this.versionService.getVersionUpdate()
  }

}
