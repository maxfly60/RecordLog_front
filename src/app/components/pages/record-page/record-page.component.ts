import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService } from '../../../services/record.service';
import { Record } from '../../../models/record';
import { ArtistService } from '../../../services/artist.service';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-record-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './record-page.component.html',
  styleUrl: './record-page.component.css',
})
export class RecordPageComponent implements OnInit {
  @Input() record?: Record;
  spotifyEmbedUrl?: SafeResourceUrl;
  artistName: string = '';
  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService,
    private artistService: ArtistService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.record = this.recordService.getRecords().find((r) => r.id === id);
    this.record = this.recordService.getRecordById(id);
    
    if (this.record?.spotify_link) {
      const url = `https://open.spotify.com/embed/album/${this.record.spotify_link}?utm_source=generator&theme=0`;
      this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    if (this.record?.artist_id !== undefined) {
      const artist = this.artistService.getArtistById(this.record.artist_id);
      this.artistName = artist ? artist.name : 'Unknown Artist';
    }
  }
  
}
