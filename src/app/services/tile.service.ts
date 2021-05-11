import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Tile } from '../models/tile.module';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  constructor(private db: AngularFireDatabase) {}

  create(tile: Tile) {
    return this.db.list('/tile').push(tile);
  }
}
