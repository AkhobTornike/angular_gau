import { Component } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../Interfaces/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-new.component.html',
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {
  public message!: string;

  constructor(
    private crudService: CrudService
  ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.crudService.createUser(form.value).subscribe(response => {
        this.message = 'User created successfully';
        form.reset();
      });
    }
  }
}
