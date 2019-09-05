/*import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/provider';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})

export class SoporteComponent implements OnInit {
  equipos: any = [];
  weather: any;
  stri: string;

  constructor(private client: ClientesService) {
    this.equipos = this.client.getUsers();
    // this.client.getUsers();
    console.log(this.equipos);
    this.client.getUsers();
    this.client.weather.subscribe((temp: any) => {
      this.weather = temp;
    });
   }

  ngOnInit() {
    console.log(this.equipos);
  }
}
*/
