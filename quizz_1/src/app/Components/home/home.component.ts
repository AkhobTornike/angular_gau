import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import  {User} from '../../Interface/user';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  public users: User[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.users = this.userService.GetAllUsers();
  }

}
