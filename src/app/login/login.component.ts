import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DataServiceService} from '../data-service.service';



@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

   data = inject(DataServiceService).getData();
   

 
  
}
