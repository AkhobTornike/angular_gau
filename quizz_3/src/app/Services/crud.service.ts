import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiPath: string = 'https://6762e21517ec5852cae77079.mockapi.io/api/user/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiPath);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiPath}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiPath, user);
  }


  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiPath}/${user.id}`, user);
  }


  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.apiPath}/${id}`);
  }
}
