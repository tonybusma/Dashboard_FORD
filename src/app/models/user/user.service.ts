import { User } from './user';
import { Injectable } from '@angular/core';
import { TokenService } from '../../auth/token.service';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.haveToken()){
      this.decode();
    }
  }

  private decode(){
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string){
    this.tokenService.saveToken(token);
    this.decode();
  }

  logout(){
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  loginOn() {
    return this.tokenService.haveToken();
  }
}
