import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{

  apiState: boolean = false;
  

  constructor(private api: ApiService, private authService: AuthService) {}

  ngOnInit(): void {

		this.checkApiState();
		setInterval(() => this.checkApiState(), 1000);
	}

	checkApiState(): void {
		this.api.checkPing().then(state => this.apiState = state);
	}

  getUserName() {
    return this.authService.userData.name;
  }

  getIsAuthenticated() : boolean {
    return this.authService.isAuthenticated;
  }

  login() {
    this.authService.login();
    
  }

  logout() {
    this.authService.logout();
    
    // this.authService.login();
  }

}
  