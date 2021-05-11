import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('stores').snapshotChanges();
  }
}
