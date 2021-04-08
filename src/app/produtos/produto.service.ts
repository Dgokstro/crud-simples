import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private _angularFireDatabase: AngularFireDatabase) {}

  insert(produto: Produto) {
    this._angularFireDatabase
      .list('produtos')
      .push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  update(produto: Produto, key: string) {
    this._angularFireDatabase.list('produtos').update(key, produto);
  }
  getAll() {
    return this._angularFireDatabase
      .list('produtos')
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
    this._angularFireDatabase.object(`produtos/${key}`).remove();
  }
}
