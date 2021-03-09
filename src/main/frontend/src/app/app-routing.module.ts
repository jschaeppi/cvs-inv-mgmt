import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvItemTableComponent} from "./inv/inv-item-table/inv-item-table.component";
import {InvItemEditComponent} from "./inv/inv-item-edit/inv-item-edit.component";
import {InvItemAddComponent} from "./inv/inv-item-add/inv-item-add.component";
import {VendorAddComponent} from "./vendor/vendor-add/vendor-add.component";
import {VendorDetailsComponent} from "./vendor/vendor-details/vendor-details.component";
import {VendorEditComponent} from "./vendor/vendor-edit/vendor-edit.component";
import {LocationAddComponent} from "./location/location-add/location-add.component";
import {LocationDetailsComponent} from "./location/location-details/location-details.component";
import {LocationEditComponent} from "./location/location-edit/location-edit.component";
import {LocationAddItemsComponent} from "./location/location-add-items/location-add-items.component";

const routes: Routes = [

  { path: 'inv', component: InvItemTableComponent },
  { path: 'inv/cat/:catName', component: InvItemTableComponent },
  { path: 'inv/item/edit/:id', component: InvItemEditComponent, resolve: { } },
  { path: 'inv/item/add', component: InvItemAddComponent },
  { path: 'vendor/add', component: VendorAddComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent },
  { path: 'vendor', component: VendorDetailsComponent },
  { path: 'stores', component: LocationDetailsComponent },
  { path: 'stores/add', component: LocationAddComponent },
  { path: 'stores/add/item/:id', component: LocationAddItemsComponent },
  { path: 'stores/edit/:id', component: LocationEditComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
