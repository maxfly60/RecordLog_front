import { Component } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';
import { Artist } from '../../../models/artist';
import { ArtistService } from '../../../services/artist.service';
import { ArtistCardComponent } from '../../artist-card/artist-card.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-all-artists-page',
  standalone: true,
  imports: [NgFor, NgStyle, ArtistCardComponent, RouterLink],
  templateUrl: './all-artists-page.component.html',
  styleUrl: './all-artists-page.component.css'
})
export class AllArtistsPageComponent {
  constructor(private artistService: ArtistService) {  }

  getArtists(): Artist[] {
    return this.artistService.getArtists();
  }
}
