import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PQRSComponent implements OnInit {
  private routeData;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild.data;
      }
    });
  }

}
