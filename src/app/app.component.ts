import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true


})
export class AppComponent {
  title = 'amangular';
  
}
