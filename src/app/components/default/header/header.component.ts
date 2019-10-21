import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_brand = 'assets/images/logo_grupo.jpg';
  constructor(
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}
