export class Record {
  id: number;
  title: string;
  artist_id: number;
  format: string;
  date: string;
  genre: string;
  label: string;
  songs_list: string;
  coverLink: string;
  spotify_link: string;

  constructor(id: number, title: string, artist_id: number, format: string, date: string,
    genre: string, label: string, songs_list: string, coverLink: string, spotify_link: string) {
    this.id = id;
    this.title = title;
    this.artist_id = artist_id;
    this.format = format;
    this.date = date;
    this.genre = genre;
    this.label = label;
    this.songs_list = songs_list;
    this.coverLink = coverLink;
    this.spotify_link = spotify_link;
  }
}
