import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreateNewComponent } from './Components/create-new/create-new.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'create-new', component: CreateNewComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},
];
