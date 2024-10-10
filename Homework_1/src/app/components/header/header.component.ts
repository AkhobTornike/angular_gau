import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
