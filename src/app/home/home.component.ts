import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos = ["Validação dos campos","Menu suspenso","Melhorar layout","Regras de negocio"]
  constructor() { }

  ngOnInit(): void {
  }

}
