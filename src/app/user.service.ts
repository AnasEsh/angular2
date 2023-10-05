import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map,of, tap } from 'rxjs';
import { apiUri } from 'src/assets/globals';
import { SimpleStateResponse } from './utils/myRes';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  login(email:string, pswd:string):Observable<SimpleStateResponse> {

    const body=JSON.stringify({
      email,pswd
    })
   return this.http.post(apiUri + 'user/login',body,{
    withCredentials:true,
      headers:{'content-type': 'application/json',
      //  "Authorization":"connect.sid=s%3AUXeWK4eP_sd4w60lpkq4HYt6JD1Rj331.vcq%2Bcxr6rUAeOsYJxRzLbCIPO%2FcD80eKx6VzndqM3yQ"
    },
      observe:"response"
    }).pipe(
      catchError((e:HttpErrorResponse):Observable<SimpleStateResponse>=>{
        console.log("err catched",e)
      let errorMessage
      switch(e.status) {
        case 401:
        errorMessage="Invalid Credintials provided"
        break;
        default:
        errorMessage=e.statusText
       }
       return of({ok:e.status==200,errorMessage, response:e} as SimpleStateResponse)
      }),
      // catchError((err:HttpErrorResponse):Observable<SimpleStateResponse|any|HttpResponse<any>>=>{
      //   // console.log(err)
      //   return of({ok:true, response:err} as SimpleStateResponse)
      // }),
      map((response:HttpResponse<any>|SimpleStateResponse):SimpleStateResponse=>{
        if(response.constructor!=HttpResponse)
        return response
        const result:SimpleStateResponse={ok:response.body.done&&response.status==200, response:response} 
        if(response.body.msg)
        result.errorMessage=response.body.msg
      return result
      })
      )
  }
}
