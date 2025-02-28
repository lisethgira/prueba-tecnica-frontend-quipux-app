import { Component, ElementRef, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { faBars, faBuilding, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;

  open = false;
  isMobile = false;
  faBars = faBars;
  faBuilding = faBuilding;
  faNewspaper = faNewspaper;
  faUser = faUser;

  constructor() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 768;
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  /** Abre y cierra el sidebar */
  toggleMenu() {
    this.open = !this.open;
  }
}

