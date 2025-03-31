import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../../models/record';
import { ArtistService } from '../../services/artist.service';
ArtistService


@Component({
  selector: 'app-record-card', 
  standalone: true,
  imports: [],
  templateUrl: './record-card.component.html',
  styleUrl: './record-card.component.css'
})
export class RecordCardComponent implements OnInit{
  @Input() record!: Record;

  artistName: string = '';

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    if (this.record.artistID !== undefined) {
      const artist = this.artistService.getArtistById(this.record.artistID);
      this.artistName = artist ? artist.name : 'Unknown Artist';
    }
  }
}
