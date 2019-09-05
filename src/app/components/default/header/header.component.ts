import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_brand="assets/images/logo_grupo.jpg";
  constructor() { }

  ngOnInit() {
  }

}
