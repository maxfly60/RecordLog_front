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

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recordService.getRecordById(id).then((record :any) => {
      this.record = record;
      if (this.record?.spotifyLink) {
        const url = `https://open.spotify.com/embed/album/${this.record.spotifyLink}?utm_source=generator&theme=0`;
        this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    });    
  }
}
