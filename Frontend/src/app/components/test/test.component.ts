import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service:TestService) { }

  users:any;

  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(response => {
      this.users = response;
    });
  }

}
