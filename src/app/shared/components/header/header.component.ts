import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenu: {
    defaultOptions: {name: string, icon: string, router: string[]}[];
  } = { defaultOptions: [] };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/home']
      },
      {
        name: 'Pokemons',
        icon: 'uil uil-search',
        router: ['/pokemons']
      },
      {
        name: 'Create My Team',
        icon: 'uil uil-6-plus',
        router: ['/create-my-team']
      },
      {
        name: 'About',
        icon: 'uil uil-head-side',
        router: ['/about']
      }
    ];
  }

  // navigateTo(route: string[]): void {
  //   this.router.navigate(route);
  // }

}
