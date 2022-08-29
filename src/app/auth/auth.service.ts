import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../models/user/user.service';
import { tap } from 'rxjs/operators';

const Api = environment.urlApi;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(user: string, password: string): Observable<HttpResponse<any>> {
    return this.http
      .post(
        `${Api}/user/login`,
        {
          userName: user,
          password: password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
