import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService) {}

  heroes: Hero[] = []
  selectedHero?: Hero;
  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroes= this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  onKey(event: KeyboardEvent, heroId: number) {
    let focusedHero = heroId
    if (event.key === "ArrowUp") {
      focusedHero = --heroId
    }
    if (event.key === "ArrowDown") {
      focusedHero = ++heroId
    }
    if(event.key === "Enter"){
      document.getElementById(focusedHero.toString())?.click()
    }
    document.getElementById((focusedHero).toString())?.focus()
    console.log(event.key)
  }
}
