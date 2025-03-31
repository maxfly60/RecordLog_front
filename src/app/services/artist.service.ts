import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private artists: Artist[] = [];
  private mockartists: Artist[] = [
    {
      id: 1,
      name: 'Pink Floyd',
      realNames: "les mecs de pink floyd",
      pictureLink: '',
    },
    {
      id: 2,
      name: 'Daft Punk',
      realNames: "les mecs de daft punk",
      pictureLink: '',
    },
  ];
  constructor() {}

  getArtistById(id: number): Artist | undefined {
    return this.mockartists.find(artist => artist.id === id);
  }
  
}
