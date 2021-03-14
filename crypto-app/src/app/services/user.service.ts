import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getUser(username: string): Observable<UserDB> {
    this.url = 'http://localhost:8080/user/' + username;
    return this.http.get<UserDB>(this.url);
  }

  getUsers(): Observable<User[]> {
    this.url = 'http://localhost:8080/users';
    return this.http.get<User[]>(this.url);
  }

  storeUser(user: User): void {
    this.http.post('http://localhost:8080/user', this.body_store(user)).subscribe(data=>
    console.log('Post new User'));
  }

   body_store(user: User): any {
    let userBody: any = {
      name: user.name,
      username: user.username,
      password: user.password,
      country: user.country
    }
    return userBody;
  }

  updateUser(user: User): void {
    this.http.put('http://localhost:8080/user', this.body_put(user)).subscribe(data=>
    console.log('Post new User'));
  }

  body_put(user: User): any {
    let userBody: any = {
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,
      country: user.country
    }
    return userBody;
  }

  deleteUser(username: string): void {
    console.log(username)
    this.http.delete('http://localhost:8080/user/' + username).subscribe(data=>
    console.log('Delete User with username = '+username));
  }

}

export interface UserDB {
  "id": number,
  "name": string,
  "username": string,
  "password": string,
  "country": string
}