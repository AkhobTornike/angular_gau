import { Component, OnInit } from '@angular/core';

import { CrudService } from '../../Services/crud.service';
import { CommonModule } from '@angular/common';
import { User } from '../../Interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public users!: User[];
  public message!: string;

  constructor(
    private crudService: CrudService,
    private route: Router
  ) { }

  ngOnInit() {
    this.crudService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  deleteUser(id: string) {
    this.crudService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      this.message = 'User deleted successfully!';
    });
  }

  updateUser(id: string) {
    this.route.navigate(['/update-user', id]);
  }
  
}
