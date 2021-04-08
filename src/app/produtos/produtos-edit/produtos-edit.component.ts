import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoDataService } from '../produto-data.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.scss'],
})
export class ProdutosEditComponent implements OnInit {
  produto: Produto;
  key: string = '';
  constructor(
    private _produtoService: ProdutoService,
    private _produtoDataService: ProdutoDataService
  ) {}

  ngOnInit(): void {
    this.produto = new Produto();
    this._produtoDataService.produtoAtual.subscribe((data) => {
      if (data.produto && data.key) {
        this.produto = new Produto();
        this.produto = { ...data.produto };
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this._produtoService.update(this.produto, this.key);
    } else {
      this._produtoService.insert(this.produto);
    }

    this.produto = new Produto();

    this.key = null;
  }
}
