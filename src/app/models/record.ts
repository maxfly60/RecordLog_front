import { Artist } from "./artist";

export class Record {
  id: number;
  title: string;
  artist: Artist;
  format: string;
  date: string;
  genre: string;
  label: string;
  songsList: string;
  coverLink: string;
  spotifyLink: string;

  constructor(id: number, title: string, artist: Artist, format: string, date: string,
    genre: string, label: string, songsList: string, coverLink: string, spotifyLink: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.format = format;
    this.date = date;
    this.genre = genre;
    this.label = label;
    this.songsList = songsList;
    this.coverLink = coverLink;
    this.spotifyLink = spotifyLink;
  }
}
