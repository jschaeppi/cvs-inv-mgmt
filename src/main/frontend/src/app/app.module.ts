import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvNavComponent } from './inv-nav/inv-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClarityModule } from "@clr/angular";
// import { ClrHeader} from "@clr/angular";
import { ClrLayoutModule} from "@clr/angular";
import { ClrNavigationModule } from "@clr/angular";
import { InvItemTableComponent } from './inv-item-table/inv-item-table.component';
import { HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvItemEditComponent } from './inv-item-edit/inv-item-edit.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InvNavComponent,
    InvItemTableComponent,
    DashboardComponent,
    InvItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClrLayoutModule,
    ClrNavigationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
