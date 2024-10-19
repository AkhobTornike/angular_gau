import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../Interface/user';
import { UserService } from '../../../Services/user.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  public user!: User; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private userService: UserService) {}

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.activatedRoute.paramMap.subscribe(params => {
      const userId = Number(params.get('id')!);
      this.user = this.userService.GetUserById(userId);
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
