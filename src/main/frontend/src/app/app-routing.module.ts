import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvItemTableComponent} from "./inv-item-table/inv-item-table.component";

const routes: Routes = [

  { path: 'dashboard', component: InvItemTableComponent },
  { path: 'cat/:catName', component: InvItemTableComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
