import { Component, OnInit } from '@angular/core';
import { NgFor, NgStyle, NgIf } from '@angular/common';
import { Artist } from '../../../models/artist';
import { ArtistService } from '../../../services/artist.service';
import { ArtistCardComponent } from '../../artist-card/artist-card.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-all-artists-page',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, ArtistCardComponent, RouterLink],
  templateUrl: './all-artists-page.component.html',
  styleUrl: './all-artists-page.component.css'
})
export class AllArtistsPageComponent implements OnInit {
  constructor(private artistService: ArtistService, private authService: AuthService) {  }

  ngOnInit(): void {
    
  }
  getArtists(): Artist[] {
    return this.artistService.getArtists();
  }

  getIsAuthenticated() : boolean {
    return this.authService.isAuthenticated;
  }
}
