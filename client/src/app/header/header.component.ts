import {Component, OnInit} from '@angular/core'
import {AuthService, AuthStatus, AuthUser} from "@app/core";

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})

export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  public user: AuthUser;
  constructor(private authService: AuthService) {}

  ngOnInit () {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.loginChangedSource.subscribe(status => {
      if (status === AuthStatus.LoggedIn) {
        this.isLoggedIn = true
      } else if (status === AuthStatus.LoggedOut) {
        this.isLoggedIn = false
      }
    })
    this.user = this.isLoggedIn
      ? this.authService.getUser()
      : undefined
  }


  }
