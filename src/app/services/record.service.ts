import { Injectable } from '@angular/core';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  // private records: Record[] = [];
  private records: Record[] = [
    {
      id: 1,
      title: 'The Dark Side of the Moon',
      artist_id: 1,
      format: 'Vinyle',
      date: '1973-03-01',
      genre: 'Rock progressif',
      label: 'Harvest Records',
      songs_list: "",
      coverLink:
        'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
      spotify_link: "4LH4d3cOWNNsVw41Gqt2kv",
    },
    {
      id: 2,
      title: 'Discovery',
      artist_id: 2,
      format: 'Vinyle',
      date: '2001-03-12',
      genre: 'Disco House',
      label: 'Daft Life',
      songs_list: "",
      coverLink:
        'https://i.scdn.co/image/ab67616d0000b2732c25dad9f8fd54652f7ba5df',
      spotify_link: "2noRn2Aes5aoNVsU6iWThc",
    },
    {
      id: 3,
      title: 'Homework',
      artist_id: 2,
      format: 'Vinyle',
      date: '2001-03-12',
      genre: 'House',
      label: 'Daft Life',
      songs_list: "",
      coverLink:
        'https://i.scdn.co/image/ab67616d0000b2738ac778cc7d88779f74d33311',
      spotify_link: "5uRdvUR7xCnHmUW8n64n9y",
    },
  ];
  constructor() { }

  getRecords(): Record[] {
    return this.records;
  }

  getRecordById(id: number): Record | undefined {
    return this.records.find(record => record.id === id);
  }

  getRecordByartist_id(artist_id: number) : Record[] {
    return this.records.filter(record => record.artist_id === artist_id)
  }
}
