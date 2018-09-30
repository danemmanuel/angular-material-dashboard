import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../shared/user/user.service';
import { User } from './../../shared/user/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

user: User;
constructor(private userService: UserService) { }

  @Input() title: string;
  @Input() icon: string;


  ngOnInit() {
   this.userService.getCurrentUser().subscribe(response => {
      this.user = response;
    });
  }

  menuClick() {
   // document.getElementById('main-panel').style.marginRight = '260px';
  }
}
