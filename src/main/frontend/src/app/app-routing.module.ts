import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvItemTableComponent} from "./inv-item-table/inv-item-table.component";
import {InvItemEditComponent} from "./inv-item-edit/inv-item-edit.component";
import {InvItemAddComponent} from "./inv-item-add/inv-item-add.component";
import {VendorAddComponent} from "./vendor/vendor-add/vendor-add.component";
import {VendorEditComponent} from "./vendor/vendor-edit/vendor-edit.component";
import {VendorDetailsComponent} from "./vendor/vendor-details/vendor-details.component";

const routes: Routes = [

  { path: 'dashboard', component: InvItemTableComponent },
  { path: 'cat/:catName', component: InvItemTableComponent },
  { path: 'inv/item/edit/:id', component: InvItemEditComponent, resolve: { } },
  { path: 'inv/item/add', component: InvItemAddComponent },
  { path: 'vendor/add', component: VendorAddComponent },
  { path: 'vendor/edit', component: VendorEditComponent },
  { path: 'vendor', component: VendorDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
