import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvItemTableComponent} from "./inv-item-table/inv-item-table.component";
import {InvItemEditComponent} from "./inv-item-edit/inv-item-edit.component";

const routes: Routes = [

  { path: 'dashboard', component: InvItemTableComponent },
  { path: 'cat/:catName', component: InvItemTableComponent },
  { path: 'inv/item/edit/:id', component: InvItemEditComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
