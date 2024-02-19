import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HEROES } from '../mock.heroes';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UpperCasePipe, HeroDetailComponent],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
