import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUser } from './interfaces/user.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userPromise: Promise<IUser> | undefined;
  userByIdPromise: Promise<IUser> | undefined;
  constructor(
    private readonly _usersService: UsersService
  ){}

  ngOnInit() {
    this.userPromise = this._usersService.getUser();

    this.userByIdPromise = lastValueFrom(this._usersService.getUserById(2));

    this._usersService.getUser().then(user => {
      console.log('User ->', user);
    })
  }
}
