import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import empresaData from '../../../assets/data/info-empresa.json';
import contactoData from '../../../assets/data/info-contacto.json';

@Component({
  selector: 'app-empresas',
  standalone: true, // Asegúrate de que este componente sea standalone
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  empresa = empresaData[0].empresa;
  contacto = contactoData[0].contacto;
}
