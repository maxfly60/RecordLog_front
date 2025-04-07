import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private artists: Artist[] = [];

  constructor(private api: ApiService) {
    this.refreshArtists();
  }

  refreshArtists(): void {
    this.api.getArtists().then((artists: any) => (this.artists = artists));
  }

  getArtists(): Artist[] {
    return this.artists;
  }

  getArtistById(id: number): Promise<Artist> {
    return this.api.getArtistById(id);
  }
}
