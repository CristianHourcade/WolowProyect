import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarOpen: boolean = false;
  urlNavigation: string[] = ['Inicio', 'Tecnologías', 'Beneficios', 'Requerimientos'];
  AuthSotrage: string = null;
  constructor(
    private mRouter: Router
  ) { }

  ngOnInit(): void {
    this.AuthSotrage = localStorage.getItem("Auth-Sesion");
  }

  GoLogin(){
    this.mRouter.navigate(["/login"]);
  }
}
