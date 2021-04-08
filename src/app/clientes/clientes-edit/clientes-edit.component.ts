import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteDataService } from '../cliente-data.service';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.scss'],
})
export class ClientesEditComponent implements OnInit {
  cliente: Cliente;
  key: string = '';
  constructor(
    private _clienteService: ClienteService,
    private _clienteDataService: ClienteDataService
  ) {}

  ngOnInit(): void {
    this.cliente = new Cliente();
    this._clienteDataService.clienteAtual.subscribe((data) => {
      if (data.cliente && data.key) {
        this.cliente = new Cliente();
        this.cliente = { ...data.cliente };
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this._clienteService.update(this.cliente, this.key);
    } else {
      this._clienteService.insert(this.cliente);
    }

    this.cliente = new Cliente();

    this.key = null;
  }
}
