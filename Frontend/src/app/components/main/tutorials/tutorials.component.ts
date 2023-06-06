import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AsignatureService } from 'src/app/services/asignature.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit, AfterViewInit {
  nameAsignature: any;
  idAsigntature: any;

  ngOnInit() {
    // this.asignatureService.asignature$.subscribe((asig) => {
    //   this.nameAsignature = asig;
    //   console.log(this.nameAsignature);
    // });

    // this.asignatureService.idAsignature$.subscribe((id) => {
    //   this.idAsigntature = id;
    //   console.log(this.idAsigntature);
    // });
  }

  ngAfterViewInit() {
    this.asignatureService.asignature$.subscribe((asig) => {
        this.nameAsignature = asig;
        console.log(this.nameAsignature);
      });

      this.asignatureService.idAsignature$.subscribe((id) => {
        this.idAsigntature = id;
        console.log(this.idAsigntature);
      });
  }

  constructor(
    private asignatureService: AsignatureService,
  ) {}
}
