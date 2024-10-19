import { Component } from '@angular/core';
import { User } from '../../../Interface/user';
import { UserService } from '../../../Services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  public users: User[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.users = this.userService.GetAllUsers();
  }
}
