import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;

  ngAfterViewInit() {
    // Solución: Usar setTimeout para esperar a que Angular inicialice las referencias
    setTimeout(() => {
      if (this.toggleBtn && this.sidebar) {
        this.toggleBtn.nativeElement.addEventListener("click", () => {
          this.sidebar.nativeElement.classList.toggle("expand");
        });
      }
    });
  }

  // isOpen = false;
  // toggleSidebar() {
  //   this.isOpen = !this.isOpen;
  // }

  open = false;
  faBars = faBars;

  toggleMenu() {
    this.open = !this.open;
  }

}
