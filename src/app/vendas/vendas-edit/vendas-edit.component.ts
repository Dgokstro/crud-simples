import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { Produto } from 'src/app/produtos/produto';
import { ProdutoService } from 'src/app/produtos/produto.service';
import { Vendas } from '../vendas';
import { VendasDataService } from '../vendas-data.service';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-vendas-edit',
  templateUrl: './vendas-edit.component.html',
  styleUrls: ['./vendas-edit.component.scss'],
})
export class VendasEditComponent implements OnInit {
  venda: Vendas;
  key: string = '';
  clientes: any;
  produtos: any;
  verificaCliente: boolean;
  constructor(
    private _vendasService: VendasService,
    private _vendasDataService: VendasDataService,
    private _clienteService: ClienteService,
    private _produtosService: ProdutoService
  ) {}
  getCliente() {
    this._clienteService.getAll().subscribe((data) => (this.clientes = data));
  }
  getProdutos() {
    this._produtosService.getAll().subscribe((data) => (this.produtos = data));
  }
  onSelectClient(key: string) {
    this.venda.cliente = this.clientes.filter(
      (cliente) => cliente.key === key
    )[0];
  }
  onSelectProduto(key: string, index: number) {
    this.venda.itens[index].produto = this.produtos.filter(
      (produto) => produto.key === key
    )[0];
    this.venda.itens[index].valorUnitario = this.venda.itens[
      index
    ].produto.valorUnitario;
  }
  adicionarItem() {
    this.venda.itens.push({
      produto: new Produto(),
      quantidade: 0,
      valorUnitario: 0,
      valorTotal: 0,
    });
  }
  excluirItem(index: number) {
    this.venda.itens.splice(index, 1);
  }
  verificaItem(index: number): boolean {
    console.log(Boolean(this.venda.itens[index]))
    return Boolean(this.venda.itens[index]);
  }
  ngOnInit(): void {
    this.venda = new Vendas();
    this.getCliente();
    this.getProdutos();
    this.venda.itens = [
      {
        produto: new Produto(),
        quantidade: 0,
        valorUnitario: 0,
        valorTotal: 0,
      },
    ];
    this._vendasDataService.vendaAtual.subscribe((data) => {
      if (data.venda && data.key) {
        this.venda = new Vendas();
        this.venda = { ...data.venda };
        this.key = data.key;
        this.venda.itens = Object.keys(data.venda.itens).map(
          (index) => data.venda.itens[index]
        );
        this.verificaCliente = this.venda.cliente ? true : false;
        console.log(this.venda);
      }
    });
  }
  ngAfterContentChecked(): void {
    this.venda.itens.map(
      (item) => (item.valorTotal = item.quantidade * item.valorUnitario)
    );
    this.venda.valorTotal = this.venda.itens.reduce(
      (acumulator, curentValue) => acumulator + curentValue.valorTotal,
      0
    );
    console.log(this.venda);
  }

  onSubmit() {
    if (this.key) {
      this._vendasService.update(this.venda, this.key);
    } else {
      this._vendasService.insert(this.venda);
    }

    this.venda = new Vendas();
    this.venda.itens = [
      {
        produto: new Produto(),
        quantidade: 0,
        valorUnitario: 0,
        valorTotal: 0,
      },
    ];
    this.venda.cliente = new Cliente();

    this.key = null;
  }
}
