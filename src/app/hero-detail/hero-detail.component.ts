import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
