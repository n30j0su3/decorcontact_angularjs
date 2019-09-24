import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

private reader: FileReader;
fileComplete: any = '';
  constructor() {
    this.reader = new FileReader();
    this.fileComplete = Observable.create((observer: Subscriber<any[]>): void => {
      // If success
      this.reader.onload = () => {
        observer.next(this.reader.result as any);
        observer.complete();
      };
      this.reader.onerror = (error): void => {
      observer.error(error);
    };
    });
  }
  upload(name: File): Observable<any>{
    this.reader.readAsArrayBuffer(name);
    return this.fileComplete;
  }
  uploadDataUrl(name: File): Observable<any>{
    this.reader.readAsDataURL(name);
    return this.fileComplete;
  }
  uploadAsText(name: File): Observable<any>{
    this.reader.readAsText(name);
    return this.fileComplete;
  }
}
