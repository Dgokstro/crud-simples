import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../produto';
import { ProdutoDataService } from '../produto-data.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss'],
})
export class ProdutosListComponent implements OnInit {
  produtos: Observable<any>;
  constructor(
    private _produtoService: ProdutoService,
    private _produtoDataService: ProdutoDataService
  ) {}

  ngOnInit(): void {
    this.produtos = this._produtoService.getAll();
    console.log(this.produtos);
  }
  delete(key: string) {
    this._produtoService.delete(key);
  }
  edit(produto: Produto, key: string) {
    this._produtoDataService.obtemProduto(produto, key);
  }
}
