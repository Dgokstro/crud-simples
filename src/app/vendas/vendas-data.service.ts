import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vendas } from './vendas';

@Injectable({
  providedIn: 'root',
})
export class VendasDataService {
  constructor() {}
  private vendaSource = new BehaviorSubject({ venda: null, key: '' });
  vendaAtual = this.vendaSource.asObservable();

  obtemVenda(venda: Vendas, key: string) {
    this.vendaSource.next({ venda: venda, key: key });
  }
}
