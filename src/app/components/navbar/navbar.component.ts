import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser, faChevronDown, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isHome: boolean = true;
  breadcrumb: string = '';
  user = {
    name: 'Juan',
    lastname: 'Pérez',
    avatar: 'assets/avatar.jpg' // Ruta de la imagen del usuario
  };
  faCircleUser = faCircleUser;
  faChevronDown = faChevronDown;
  faHouse = faHouse;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavbar(event.urlAfterRedirects);
      }
    });
  }

  updateNavbar(url: string) {
    if (url === '/' || url === '/home') {
      this.isHome = true;
      this.breadcrumb = '';
    } else {
      this.isHome = false;
      const pathArray = url.split('/').filter(segment => segment !== '');
      this.breadcrumb = `   ${pathArray.join(' / ')}`;
    }
  }

  logout() {
    console.log('Cerrando sesión...');
    // Aquí puedes agregar lógica para cerrar sesión, limpiar tokens, etc.
  }
}
