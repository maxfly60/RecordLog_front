export class Record {
  id?: number;
  title: string;
  artistID: number;
  format: string;
  date: string;
  genre: string;
  label: string;
  songsList: string;
  coverLink: string;
  spotifyLink: string;

  constructor(id: number, title: string, artistID: number, format: string, date: string,
    genre: string, label: string, songsList: string, coverLink: string, spotifyLink: string) {
    this.id = id;
    this.title = title;
    this.artistID = artistID;
    this.format = format;
    this.date = date;
    this.genre = genre;
    this.label = label;
    this.songsList = songsList;
    this.coverLink = coverLink;
    this.spotifyLink = spotifyLink;
  }
}
