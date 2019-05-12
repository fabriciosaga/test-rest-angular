import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserItem } from './user-item';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { 

  }

  getUsers() {
    return this.httpClient.get<UserItem[]>("http://localhost:8030/users");
  }

  getUser(id:number) {
    return this.httpClient.get<UserItem>("http://localhost:8030/user/" + id);
  }

  updateUser(user:UserItem) {
    return this.httpClient.put<UserItem>("http://localhost:8030/updateUser", user);
  }
}
