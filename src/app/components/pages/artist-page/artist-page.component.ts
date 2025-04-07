import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Artist } from '../../../models/artist';
import { ArtistService } from '../../../services/artist.service';
import { Record } from '../../../models/record';
import { RecordService } from '../../../services/record.service';
import { NgIf, NgFor, NgStyle } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RecordCardComponent } from '../../record-card/record-card.component';



@Component({
	selector: 'app-artist-page',
	standalone: true,
	imports: [NgIf, NgFor, NgStyle, RecordCardComponent, RouterLink],
	templateUrl: './artist-page.component.html',
	styleUrl: './artist-page.component.css'
})
export class ArtistPageComponent implements OnInit {
	@Input() artist?: Artist;
	@Input() allRecords?: Record[];

	constructor(
		private route: ActivatedRoute,
		private artistService: ArtistService,
		private recordService: RecordService
	) { }

	ngOnInit(): void {
		
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.artistService.getArtistById(id).then((artist : any) => {
			this.artist= artist;

			this.recordService.getRecordsByArtistId(artist.id).then((records : any) => {
				this.allRecords = records;
			});
		});
	}	
}
