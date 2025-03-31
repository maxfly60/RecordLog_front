import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  private rotation = 0;
  private animationFrameId: number | null = null;
  private lastTimestamp: number | null = null;

  ngAfterViewInit(): void {
    const logo = document.getElementById('logo');
    if (!logo) return;

    const rotate = (timestamp: number) => {
      if (!this.lastTimestamp) this.lastTimestamp = timestamp;
      const delta = timestamp - this.lastTimestamp;
      this.lastTimestamp = timestamp;

      this.rotation += delta * 0.072; // 💡 Vitesse doublée (5s pour 360°)
      this.rotation %= 360;

      logo.style.transform = `rotate(${this.rotation}deg)`;
      this.animationFrameId = requestAnimationFrame(rotate);
    };

    const startRotation = () => {
      if (this.animationFrameId == null) {
        this.lastTimestamp = null;
        this.animationFrameId = requestAnimationFrame(rotate);
      }
    };

    const stopRotation = () => {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    };

    // 🟢 Démarrer la rotation automatiquement
    startRotation();

    // 🛑 Arrêter au survol
    logo.addEventListener('mouseenter', () => {
      stopRotation();
    });

    // 🔁 Reprendre à la sortie du survol
    logo.addEventListener('mouseleave', () => {
      startRotation();
    });
  }
}
