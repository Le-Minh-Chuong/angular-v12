import { Component, OnInit } from '@angular/core';
import { HttpServerService } from './../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServer: HttpServerService) {}

  ngOnInit(): void {
    this.httpServer.getComments().subscribe((data) => {
      console.log('get comments: ', data);
    });
    // this.httpServer.getRandomUsers(5).subscribe((data) => {
    //   console.log('get random users: ', data);
    // });
  }
}
