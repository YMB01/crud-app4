import { Component, OnInit } from '@angular/core';
import { UserData } from './in-memeory-data.service';
import { DataService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lets CRUD';
  users: UserData[]=[];

  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users=data;
    });
  }
 
ngOnInit(){
    this.getUsers();
   
}
 
}