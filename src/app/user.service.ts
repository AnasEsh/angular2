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
      headers:{'content-type': 'application/json',
      //  "Authorization":"connect.sid=s%3AUXeWK4eP_sd4w60lpkq4HYt6JD1Rj331.vcq%2Bcxr6rUAeOsYJxRzLbCIPO%2FcD80eKx6VzndqM3yQ"
    },
      observe:"response"
    }).pipe(
      // catchError((e:HttpErrorResponse):Observable<SimpleStateResponse>=>{
      //   console.log("err catched")
      // let errorMessage
      // console.log(e)
      // switch(e.status) {
      //   case 401:
      //   errorMessage="Invalid Credintials provided"
      //   break;
      //   default:
      //   errorMessage=e.statusText
      //  }
      //  return of({ok:false,errorMessage, response:e} as SimpleStateResponse)
      // }),
      // catchError((err:HttpErrorResponse):Observable<SimpleStateResponse|any|HttpResponse<any>>=>{
      //   // console.log(err)
      //   return of({ok:true, response:err} as SimpleStateResponse)
      // }),
      tap((response)=>{
        console.log('reso is:' , response)
        console.log("seto",response.headers.get('Set-Cookie'))
      }),
      map((response:HttpResponse<any>|SimpleStateResponse):SimpleStateResponse=>{
       
        console.log("response:", JSON.stringify(response))
        return {ok:true, response:response} as SimpleStateResponse
      })
      )
  }
}
