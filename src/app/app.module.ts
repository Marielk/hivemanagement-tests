import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { versionUpdateService } from './services/update-service.service'
// translate library
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [versionUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
