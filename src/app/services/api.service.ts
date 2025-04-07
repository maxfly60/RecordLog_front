import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from '../models/record';
import { Artist } from '../models/artist';
Record

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  checkPing(): Promise<boolean> {
    return new Promise((resolve) => {
      this.httpClient
        .get('/api/healthcheck', { responseType: 'text' })
        .subscribe({
          next: (responses: any) => {
            resolve(responses);
          },
          error: () => {
            resolve(false);
          },
        });
    });
  }

  // ARTISTS
  getArtists(): Promise<Artist[]> {
		return new Promise(resolve => {
			this.httpClient.get("/api/artists")
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: () => {
						resolve([]);
					}
				});
		});
	}

  getArtistById(id : number): Promise<Artist> {
		return new Promise((resolve, reject) => {
			this.httpClient.get(`/api/artists/${id}`)
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: (error) => {
            reject(error);
          }
				});
		});
	}


  // RECORDS
  getRecords(): Promise<Record[]> {
		return new Promise(resolve => {
			this.httpClient.get("/api/records")
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: () => {
						resolve([]);
					}
				});
		});
	}
  getRecordById(id : number): Promise<Record> {
		return new Promise((resolve, reject) => {
			this.httpClient.get(`/api/records/${id}`)
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: (error) => {
            reject(error);
          }
				});
		});
	}

	getRecordsByArtistId(artistId : number): Promise<Record[]> {
		return new Promise(resolve => {
			this.httpClient.get(`/api/records/by-artist/${artistId}`)
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: () => {
						resolve([]);
					}
				});
		});
	}
}
