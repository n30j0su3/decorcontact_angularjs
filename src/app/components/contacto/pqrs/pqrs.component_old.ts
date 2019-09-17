/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute} from '@angular/router';

// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PQRSComponent implements OnInit, OnDestroy {
  private routeData;
  private routeDataex;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe(v => {
      console.log(v.data_brand);
      // return v.data_brand;
    });
   }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild.data;
      }
    });
    // test if the param send from the app-routing works
    console.log(this.route.data);
    this.routeDataex = this.route
    .data
    .subscribe(v => {
      console.log(v);
      console.log(JSON.stringify(v.some_data));
      // return JSON.stringify(v.some_data);
    } );
  }
  ngOnDestroy() {
    this.routeDataex.unsubscribe();
  }
  getUrlBrand() {
    // return this.route.data.subscribe(v => {
    //   v.some_data;
    // });
    // return this.routeDataex;
    // return this.route.data.subscribe(v => JSON.stringify(v.some_data));
  }

}
*/
