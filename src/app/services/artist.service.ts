import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  // private artists: Artist[] = [];
  private artists: Artist[] = [
    {
      id: 1,
      name: 'Pink Floyd',
      realNames: "les mecs de pink floyd",
      pictureLink: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVMXyCMIc2DDq3qZAKBSRBv-5370_AZsoG0shw6ZzbIk1WVEUJGg87mlSGXTfPQ3SPjJBshBHut1ef05tdUwJd2A',
    },
    {
      id: 2,
      name: 'Daft Punk',
      realNames: "Thomas & Guy-Man",
      pictureLink: 'https://handsupelectro.fr/wp-content/uploads/2021/03/image-1-1024x655.jpg',
    },
  ];
  constructor() {}

  getArtists(): Artist[] {
    return this.artists;
  }
  getArtistById(id: number): Artist | undefined {
    return this.artists.find(artist => artist.id === id);
  }
  
}
