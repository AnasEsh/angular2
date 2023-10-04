import { HttpErrorResponse, HttpResponseBase } from "@angular/common/http";

export interface SimpleStateResponse{
ok: boolean,
errorMessage?:string,
response?:HttpResponseBase|HttpErrorResponse
}