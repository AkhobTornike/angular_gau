import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CrudService } from '../../Services/crud.service';
import { User } from '../../Interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  public user!: User;
  public message!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.crudService.getUserById(userId).subscribe((data: User) => {
        this.user = data;
      });
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.crudService.updateUser(this.user).subscribe(() => {
        this.router.navigate(['/home']);
        this.message = 'User updated successfully!';
      });
    }
  }
}