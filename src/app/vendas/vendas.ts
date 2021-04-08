import { Cliente } from '../clientes/cliente';
import { Produto } from '../produtos/produto';

export class Vendas {
  cliente: Cliente;
  itens: {
    produto: Produto;
    quantidade: number;
    valorUnitario: number;
    valorTotal: number;
  }[];
  valorTotal: number;
  dataHora: Date;
}
