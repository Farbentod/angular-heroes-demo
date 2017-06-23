import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list-sortable-filterable',
  templateUrl: './hero-list-sortable-filterable.component.html',
  styleUrls: ['./hero-list-sortable-filterable.component.css']
})
export class HeroListSortableFilterableComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  searchString: string;
  sortString: string;
  sortType: string;

  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  goToDetail(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  orderTable(orderString: string) {
    this.sortType = (this.sortType ==  "+") ? "-":"+";
    this.sortString = orderString;
  }
}
