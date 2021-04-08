import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendas } from '../vendas';
import { VendasDataService } from '../vendas-data.service';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-vendas-list',
  templateUrl: './vendas-list.component.html',
  styleUrls: ['./vendas-list.component.scss'],
})
export class VendasListComponent implements OnInit {
  vendas: Observable<any>;
  constructor(
    private _vendaService: VendasService,
    private _vendaDataService: VendasDataService
  ) {}

  ngOnInit(): void {
    this.vendas = this._vendaService.getAll();
    console.log(this.vendas);
  }
  delete(key: string) {
    this._vendaService.delete(key);
  }
  edit(venda: Vendas, key: string) {
    this._vendaDataService.obtemVenda(venda, key);
  }
}
