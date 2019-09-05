import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent implements OnInit, OnDestroy {
  id: any;

  constructor(private route: ActivatedRoute) {
    /*route.params.subscribe(routeParam => {
      console.log(routeParam);
      console.log(route.params);
      // routeParam.data_brand
      // this.id = routeParam['id'];
      // do something
    });*/
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    // this.route.data.unsubscribe();
  }
  getDataBrand() {
    this.route.data.subscribe(v => {
      JSON.stringify(v.data_brand);
      // console.log(v.data_brand);
      console.log(v.data_brand);
      // console.log(JSON.stringify(v.data_brand));
    });
  }

}
