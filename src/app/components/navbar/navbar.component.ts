import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarOpen: boolean = false;
  urlNavigation: string[] = ['Inicio', 'Tecnologías', 'Beneficios', 'Requerimientos'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
