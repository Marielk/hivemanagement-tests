import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'
import  { environment }  from 'src/environments/environment'
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Cookies from 'js-cookie';


@Injectable({
  providedIn: 'root'
})
export class versionUpdateService {
  version: string = environment.version;
  constructor(
    // private cd: ChangeDetectorRef,
    private translate: TranslateService,
    private router: Router,  
  ) {
    let language = Cookies.get('language')
    if( language ){
      this.translate.setDefaultLang(language);
    } 
  }


  public updateVersion(){
    const versionObservable = new Observable(observer => {
      observer.next(this.version)
    })
    return versionObservable;
  }

  public getVersionUpdate(){
    const versionWatcher = this.updateVersion()
    .subscribe((change:string) =>{
      let currentVersion = localStorage.getItem('version')
      //console.log('version del observable: '+ change)
      //console.log('version de local storage: ' + currentVersion)
      if(change !== currentVersion){
        //this.cd.markForCheck()
        //console.log(change)
        localStorage.setItem('version', change)
        let updateMsg = this.translate.get('updates.newRelease').subscribe((text:string) => {
          //console.log(text);
          alert(`${text}${change})` )
          return text
        })
        //console.log(updateMsg);
        //this.router.navigateByUrl('home');
      } else {
        console.log('actualizada');
        
      }
    })
  }

}