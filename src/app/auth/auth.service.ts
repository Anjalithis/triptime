import { Injectable } from "@angular/core";
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError,tap, timestamp } from "rxjs/operators";
import { throwError , Subject} from "rxjs";
import { User } from "./user.model";
import { Router } from '@angular/router';

export interface AuthResponseData {

    idToken : string;
    email : string;
    refreshToken : string;
    expiresIn : string;
    localId: string;
    registered? : boolean;

}


@Injectable( {providedIn : 'root'})

export class AuthService {
user = new Subject<User>();


    constructor(private http : HttpClient,
                private router : Router){

    }

    signup(email : string , password : string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtWI2B0z3gpC15uQmfI1uwCFgzncQWkiE',
        {
            email : email , 
            password : password , 
            returnSecureToken : true
        }
        ).pipe(catchError(this.handleError),
            tap(resData=>{
            this.handleAuthentication(resData.email ,
             resData.localId,resData.idToken,
             +resData.expiresIn);
        })
        );
    }

    login(email :string , password : string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtWI2B0z3gpC15uQmfI1uwCFgzncQWkiE',
         {
            email : email , 
            password : password , 
            returnSecureToken : true
        }
        ).pipe(catchError(this.handleError),
            tap(resData=>{
            this.handleAuthentication(resData.email ,
             resData.localId,resData.idToken,
             +resData.expiresIn);
        })
        );
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
    }
    private handleAuthentication(email:string, 
                                userId : string,
                                 token:string,
                                  expiresIn:number
                                ){
         const expirationData = new Date(new Date().getTime()+ expiresIn*1000);
         const user = new User(
                                  email,
                                  userId ,
                                  token , 
                                  expirationData,
                                  );
                        this.user.next(user);
        }
    
    private handleError(errorRes : HttpErrorResponse){
            let errorMessage = 'An unknown error occurred!!!';
             if(!errorRes.error || !errorRes.error.error){
                 return throwError(errorMessage);
             }
             
             switch(errorRes.error.error.message){
                  case 'EMAIL_EXISTS':
                    errorMessage = 'This email exists already';
                    break;
                  case 'EMAIL_NOT_FOUND':
                    errorMessage = "This email does not exist";
                    break;
                 case 'INVALID_PASSWORD':
                    errorMessage = 'This paaword is not correct';
                    break;
                }
                return throwError(errorMessage);
                
        }
        addTours(place : string){
            
        }
    }