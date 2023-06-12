import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  titleAsignature: any;
  idAsignature: any;
  responseApi: any;
  asignatureArray:any;

  constructor(private _route:ActivatedRoute, private loadAsignature: GetDataService
    ) {}

    ngOnInit() {
      this.titleAsignature = this._route.snapshot.paramMap.get('asignature');
      this.idAsignature = this._route.snapshot.paramMap.get('idAsignature');

      this.asignatureArray = [];


    this.loadAsignature.getAsigContent(this.idAsignature)
    .subscribe(response => {
      this.responseApi = response;
      this.asignatureArray = this.responseApi;
      // this.contentAsignatures = this.responseApi;
      console.log(this.asignatureArray);

    });

    }
}
