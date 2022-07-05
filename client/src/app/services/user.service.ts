import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:4000/api/agent';
  private loginUrl = 'http://localhost:4000/api/auth';
  constructor(private http: HttpClient) {}

  loginUser(user: User) {
    return this.http.post<any>(this.loginUrl + '/login', user);
  }

  addUser(user: User) {
    return this.http.post<any>(this.userUrl, user);
  }

  updateUser(user: User) {
    return this.http.put<any>(this.userUrl + '/', user);
  }

  getAllUser() {
    return this.http.get<any>(this.userUrl + '/get');
  }

  getbyId(id: any) {
    return this.http.get<any>(this.userUrl + '/' + id);
  }

  deleteUser(id: number) {
    return this.http.delete<any>(this.userUrl + '/' + id);
  }

  //test admin logged or no
  isLoggedInAdmin() {
    let token = localStorage.getItem('myToken');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
  //decode token and get data
  saveDataProfil() {
    const helper = new JwtHelperService();
    let myRawToken: any = localStorage.getItem('myToken');
    const decodedToken = helper.decodeToken(myRawToken);
    return decodedToken;
  }
}
