import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MenuOption {
  name: string;
  icon: string;
  router: string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mainMenu: { defaultOptions: MenuOption[] } = { defaultOptions: [] };
  isMenuOpen = false;

  constructor(public router: Router) {}

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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const list = document.querySelector('.header__list');
    list?.setAttribute('aria-expanded', this.isMenuOpen ? 'true' : 'false');
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigateTo(route: string[]): void {
    this.router.navigate(route);
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }
}
