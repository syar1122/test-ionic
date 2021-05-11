import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/models/tile.module';
import { StoreService } from 'src/app/services/store.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-tile',
  templateUrl: './add-tile.component.html',
  styleUrls: ['./add-tile.component.scss'],
})
export class AddTileComponent implements OnInit {
  stores$;
  public tile: Tile = {
    $key: null,
    company: null,
    hight: null,
    imgUrl: null,
    index: null,
    mpk: null,
    name: null,
    price: null,
    size: null,
    store: null,
  };

  constructor(private storeService: StoreService, private camera: Camera) {}

  ngOnInit() {
    this.stores$ = this.storeService.getAll();
    this.stores$.subscribe((val) => {
      console.log(val);
    });
  }

  getImg() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.PICTURE,
        quality: 100,
      })
      .then((data) => {
        this.tile.imgUrl = 'data:image/jpeg;base64,' + data;
      });
  }
}
