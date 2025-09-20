import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Login } from './login/login';
import { DashboardComponent } from './crud/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Web App');
  fname:string = "Ali Seena Raqeem.";



}
