import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map,of } from 'rxjs';
import { apiUri } from 'src/assets/globals';
import { SimpleStateResponse } from './utils/myRes';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  login(email:string, pswd:string):Observable<any> {

    const body=JSON.stringify({
      email,pswd
    })
   return this.http.post(apiUri + 'user/login',body,{
      headers:{'content-type': 'application/json'}
    }).pipe(
      catchError((e:HttpErrorResponse)=>{
        console.log("err catched")
      let errorMessage
      console.log(`message is:${e.status}`)
      switch(e.status) {
        case 401:
        errorMessage="Invalid Credintials provided"
        break;
        default:
        errorMessage=e.message
       }
       let x:Observable<any>=of({ok:false,errorMessage})
       return x
      }),
      map((response:HttpResponse<any>|SimpleStateResponse|any)=>{
        console.log("status"+response.status)
        if(response instanceof HttpResponse){
          console.log(`response isss:${response.body}`)
        return <SimpleStateResponse>{ok:response?.status==200}
      }
      return {ok:response?.done||false} as SimpleStateResponse
      })
      )
  }
}
