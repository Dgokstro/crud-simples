import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from './cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private _angularFireDatabase: AngularFireDatabase) {}

  insert(cliente: Cliente) {
    this._angularFireDatabase
      .list('clientes')
      .push(cliente)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  update(cliente: Cliente, key: string) {
    this._angularFireDatabase.list('clientes').update(key, cliente);
  }
  getAll() {
    return this._angularFireDatabase
      .list('clientes')
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
    this._angularFireDatabase.object(`clientes/${key}`).remove();
  }
}
