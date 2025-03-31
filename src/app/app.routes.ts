import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ArtistPageComponent } from './components/pages/artist-page/artist-page.component';
import { RecordPageComponent } from './components/pages/record-page/record-page.component';
import { AllArtistsPageComponent } from './components/pages/all-artists-page/all-artists-page.component';
import { AllRecordsPageComponent } from './components/pages/all-records-page/all-records-page.component';






export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'records', component: AllRecordsPageComponent },
  { path: 'records/:id', component: RecordPageComponent },
  { path: 'artists', component: AllArtistsPageComponent },
  { path: '**', redirectTo: 'home' },
];
