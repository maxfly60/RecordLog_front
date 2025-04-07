import { Injectable } from '@angular/core';
import { Record } from '../models/record';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private records: Record[] = [];

  constructor(private api: ApiService) {
		this.refreshRecords();
	}

	getRecords(): Record[] {
		return this.records;
	}

	refreshRecords(): void {
		this.api.getRecords().then((records: any) => this.records = records);
	}

  getRecordById(id: number): Promise<Record> {
    return this.api.getRecordById(id);
  }


  getRecordsByArtistId(artistId: number) : Promise<Record[]> {
    return this.api.getRecordsByArtistId(artistId);
  }
}
