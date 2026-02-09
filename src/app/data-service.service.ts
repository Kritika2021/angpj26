import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  getData(): void {

   alert("getData service is called");


  }
}
