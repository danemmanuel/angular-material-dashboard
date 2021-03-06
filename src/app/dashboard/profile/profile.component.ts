import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user/user.service';
import { User } from './../../shared/user/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   public user: User;
   constructor(private userService: UserService) {
      
   }

  ngOnInit() {
   this.userService.getCurrentUser().subscribe(response => {
   this.user = response;
      console.log(this.user )
    });
   
  }

}
