import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import de FormsModule
@Component({
  selector: 'app-add-artist-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-artist-page.component.html',
  styleUrl: './add-artist-page.component.css'
})
export class AddArtistPageComponent {
  artist = {
    name: '',
    realName: '',
    imageUrl: ''
  };

  onSubmit() {
    console.log('Artist Added:', this.artist);
    // Ici, tu peux envoyer l'artiste au serveur via un service ou autre méthode.
  }
}
