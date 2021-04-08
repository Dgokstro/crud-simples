import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteDataService } from '../cliente-data.service';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss'],
})
export class ClientesListComponent implements OnInit {
  clientes: Observable<any>;
  constructor(
    private _clienteService: ClienteService,
    private _clienteDataService: ClienteDataService
  ) {}

  ngOnInit(): void {
    this.clientes = this._clienteService.getAll();
    console.log(this.clientes);
  }
  delete(key: string) {
    this._clienteService.delete(key);
  }
  edit(cliente: Cliente, key: string) {
    this._clienteDataService.obtemCliente(cliente, key);
  }
}
