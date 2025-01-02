import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastMsgService {
  msg : {message: string | null, type: string | null} = {message: null, type: null};
  constructor() { }

  setMsg(msg: string, type: string) {
   this.msg = {message: msg, type: type};
  }

  clearMsg(): void {
    this.msg = {message: null, type: null};
  }

  getMsg(): {message: string | null, type: string | null} {
    const msg = this.msg;
    this.clearMsg();
   return msg ;
  }
}
