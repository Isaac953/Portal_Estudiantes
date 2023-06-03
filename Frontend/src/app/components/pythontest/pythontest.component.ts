import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'pythontest',
  templateUrl: './pythontest.component.html',
  styleUrls: ['./pythontest.component.css']
})
export class PythontestComponent implements OnInit {

  constructor(private service:TestService) { }

  clothes:any;

  ngOnInit(): void {
    this.service.getClothes()
    .subscribe(response => {
      this.clothes = response;
    });
  }

}
