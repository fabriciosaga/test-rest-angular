import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { UserItem } from '../user-item';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:UserItem[];
  user:UserItem;
  
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }

  showDetail(id:number){
    this.userService.getUser(id).subscribe(
        data => this.user=data,
        error => console.log(error)
      );
  }
}
