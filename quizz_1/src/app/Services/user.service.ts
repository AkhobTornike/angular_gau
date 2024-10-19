import { Injectable } from '@angular/core';
import { User } from '../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@somenail.com',
      password: 'Admin@1234',
      registrationTime: new Date('2020-11-27T08:30:00'),
      lastLoginTime: new Date('2020-11-27T09:00:00'),
      status: 'Confirmed'
    },
    {
      id: 2,
      username: 'officer',
      email: 'officer1@somenail.com',
      password: 'Officer@4567',
      registrationTime: new Date('2020-11-27T08:30:00'),
      lastLoginTime: new Date('2020-11-27T09:00:00'),
      status: 'Confirmed'
    },
    {
      id: 3,
      username: 'manager',
      email: 'manager@somenail.com',
      password: 'Manager@7890',
      registrationTime: new Date('2020-11-27T08:40:00'),
      lastLoginTime: new Date('2020-11-27T09:10:00'),
      status: 'Blocked'
    },
    {
      id: 4,
      username: 'supervisor',
      email: 'supervisor@somenail.com',
      password: 'Supervisor@1111',
      registrationTime: new Date('2020-11-27T08:45:00'),
      lastLoginTime: new Date('2020-11-27T09:15:00'),
      status: 'Confirmed'
    },
    {
      id: 5,
      username: 'developer',
      email: 'developer@somenail.com',
      password: 'Dev@2222',
      registrationTime: new Date('2020-11-27T08:50:00'),
      lastLoginTime: new Date('2020-11-27T09:20:00'),
      status: 'Confirmed'
    },
    {
      id: 6,
      username: 'tester',
      email: 'tester@somenail.com',
      password: 'Tester@3333',
      registrationTime: new Date('2020-11-27T08:55:00'),
      lastLoginTime: new Date('2020-11-27T09:25:00'),
      status: 'Confirmed'
    },
    {
      id: 7,
      username: 'analyst',
      email: 'analyst@somenail.com',
      password: 'Analyst@4444',
      registrationTime: new Date('2020-11-27T09:00:00'),
      lastLoginTime: new Date('2020-11-27T09:30:00'),
      status: 'Confirmed'
    },
    {
      id: 8,
      username: 'consultant',
      email: 'consultant@somenail.com',
      password: 'Consultant@5555',
      registrationTime: new Date('2020-11-27T09:05:00'),
      lastLoginTime: new Date('2020-11-27T09:35:00'),
      status: 'Blocked'
    },
    {
      id: 9,
      username: 'designer',
      email: 'designer@somenail.com',
      password: 'Designer@6666',
      registrationTime: new Date('2020-11-27T09:10:00'),
      lastLoginTime: new Date('2020-11-27T09:40:00'),
      status: 'Confirmed'
    },
    {
      id: 10,
      username: 'architect',
      email: 'architect@somenail.com',
      password: 'Architect@7777',
      registrationTime: new Date('2020-11-27T09:15:00'),
      lastLoginTime: new Date('2020-11-27T09:45:00'),
      status: 'Confirmed'
    }
  ];

  constructor() { }

  // CREATING SERVICE TO SEND ALL USERS
  GetAllUsers(): User[] {
    return this.users;
  }

  // CREATING SERVICE TO SENT 1 USER BY ID
  GetUserById(id: number): User {
    const user: User | undefined = this.users.find((u) => u.id === id)

    if (!user) {
      throw new Error('User not Found')
    }

    return user
  }
}
