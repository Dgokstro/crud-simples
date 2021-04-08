import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menu = ['Home', 'Produtos', 'Clientes', 'Vendas'];
  constructor() {}

  ngOnInit(): void {}
}
