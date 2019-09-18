import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _status: BehaviorSubject<boolean>;
  private _admin: BehaviorSubject<boolean>;
  constructor() {
    this._status = new BehaviorSubject(false);
    this._admin = new BehaviorSubject(false);
   }

  public setSession(user):void {
    sessionStorage.setItem( "session", user );
    if(user && user['authorities'] && user['authorities'].length>0) {
      this._status.next(true);
      if(user['authorities'].find(item => item.authority=='ADMIN')){
        this._admin.next(true);
      }
    }
    return;
  }

  public logout():void {
    this._status.next(false);
    this._admin.next(false);
    sessionStorage.clear();
  }

  public isLoggedIn():Observable<boolean> {
    return this._status.asObservable();
  }
  
  public isAdmin():Observable<boolean> {
    return this._admin.asObservable();
  }

  public getSession():any {
    return sessionStorage.getItem( "session");
  }
}
