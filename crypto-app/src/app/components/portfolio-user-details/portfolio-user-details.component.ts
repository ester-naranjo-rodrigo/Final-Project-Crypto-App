import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio-user-details',
  templateUrl: './portfolio-user-details.component.html',
  styleUrls: ['./portfolio-user-details.component.css']
})
export class PortfolioUserDetailsComponent implements OnInit {

  name: string = '';
  username: string = '';
  password: string = '';
  country: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.userService.getUser(username).subscribe(result => {
      this.name = result.name;
      this.username = result.username;
      this.password = result.password;
      this.country = result.country;
    })
  }

  updateUser(nameEdit: string, usernameEdit: string, passwordEdit: string, countryEdit: string): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.userService.getUser(username).subscribe(result => {
      this.userService.updateUser(new User(result.id, nameEdit, usernameEdit, passwordEdit, countryEdit));
      this.router.navigate(['portfolio/'+usernameEdit]);
    })
  }

  goBack(): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.router.navigate(['portfolio/'+username]);
  }

}
