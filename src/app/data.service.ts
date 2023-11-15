import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userDataURL = 'assets/userdata.json';

  constructor(private http: HttpClient){};

  getUserData(): Observable<any[]>{
    return this.http.get<any[]>(this.userDataURL).pipe(
      catchError((error)=>{
        console.log('Error occured:', error);
        return throwError(error);
      })
    )
  }
}
