import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Vendas } from './vendas';

@Injectable({
  providedIn: 'root',
})
export class VendasService {
  constructor(private _angularFireDatabase: AngularFireDatabase) {}

  insert(venda: Vendas) {
    this._angularFireDatabase
      .list('vendas')
      .push(venda)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  update(venda: Vendas, key: string) {
    this._angularFireDatabase.list('vendas').update(key, venda);
  }
  getAll() {
    return this._angularFireDatabase
      .list('vendas')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((data) => ({
            key: data.payload.key,
            ...data.payload.exportVal(),
          }));
        })
      );
  }
  delete(key: string) {
    this._angularFireDatabase.object(`vendas/${key}`).remove();
  }
}
