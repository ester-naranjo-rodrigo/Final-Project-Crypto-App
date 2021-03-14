import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string='';
  username: string = '';
  password: string = '';
  country: string='';
  flag: boolean = true;
  flag2: boolean = false;
  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.users = [];
    this.userService.getUsers().subscribe(result => {
      console.log(result);
      this.users = result;
    })
  }

  register(): void{

    this.flag = true;
    
    for (let i=0; i<this.users.length; i++) {
      if (this.username === this.users[i].username) {
        this.flag = false;
      }
    }
    if (this.name != '' && this.username !='' && this.password !='' && this.country !='' && this.flag === true){
      this.userService.storeUser(new User(0, this.name, this.username, this.password, this.country));
      this.flag2=true;
    }
    else {
      this.flag = false;
    }
  }

  goToLogIn():void {
    this.router.navigate(['portfolio/signup']);
  }

}
