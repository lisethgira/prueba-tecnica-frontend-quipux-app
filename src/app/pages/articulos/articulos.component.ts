import { CommonModule } from '@angular/common';
import { Component,  OnInit } from '@angular/core';

import contactoData from '../../../assets/data/info-contacto.json';
import articulosData from '../../../assets/data/articulos.json';
import carrouselData from '../../../assets/data/slider.json';

@Component({
  selector: 'app-articulos',
  imports: [CommonModule],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
  contacto = contactoData[0].contacto;
  articulos = articulosData;
  carrousel = carrouselData
}
