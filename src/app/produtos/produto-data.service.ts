import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoDataService {
  constructor() {}
  private produtoSource = new BehaviorSubject({ produto: null, key: '' });
  produtoAtual = this.produtoSource.asObservable();

  obtemProduto(produto: Produto, key: string) {
    this.produtoSource.next({ produto: produto, key: key });
  }
}
