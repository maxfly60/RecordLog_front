import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{

  apiState: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
		this.checkApiState();
		setInterval(() => this.checkApiState(), 1000);
	}

	checkApiState(): void {
    console.log("checking api ...");
		this.api.checkPing().then(state => this.apiState = state);
	}

}
  