import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users: User[] = [];
  username: string = '';
  password: string = '';
  flag: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = [];
    this.userService.getUsers().subscribe(result => {
      console.log(result)
      this.users = result;
    })
  }

  signIn(): void{
    
    console.log('antes')
    console.log(this.users);
    for(let i=0; i<this.users.length; i++){
      if (this.username === this.users[i].username && this.password === this.users[i].password){
        console.log('dentro')
        this.flag = true;
        this.router.navigate(['portfolio/'+this.username]);
      }
      else {
        console.log('error')
        this.flag = false;
      }
    }
    if(this.users.length === 0){
      this.flag = false;
    }
  }


}
