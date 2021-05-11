import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTileComponent } from '../shared/add-tile/add-tile.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'Add',
    component: AddTileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
