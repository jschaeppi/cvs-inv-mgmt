import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvNavComponent } from './inv/inv-nav/inv-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClarityModule } from "@clr/angular";
import { ClrLayoutModule} from "@clr/angular";
import { ClrNavigationModule } from "@clr/angular";
import { InvItemTableComponent } from './inv/inv-item-table/inv-item-table.component';
import { HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvItemEditComponent } from './inv/inv-item-edit/inv-item-edit.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { InvItemAddComponent } from './inv/inv-item-add/inv-item-add.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorDetailsComponent } from './vendor/vendor-details/vendor-details.component';
import { LocationAddComponent } from './location/location-add/location-add.component';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { LocationDetailsComponent } from './location/location-details/location-details.component';
import { InvItemDetailsComponent } from './inv/inv-item-details/inv-item-details.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import {PhoneNumPipe} from "./common/phoneNumPipe";
import { LocationAddItemsComponent } from './location/location-add-items/location-add-items.component';

@NgModule({
  declarations: [
    AppComponent,
    InvNavComponent,
    InvItemTableComponent,
    DashboardComponent,
    InvItemEditComponent,
    InvItemAddComponent,
    VendorAddComponent,
    VendorDetailsComponent,
    LocationAddComponent,
    LocationEditComponent,
    LocationDetailsComponent,
    InvItemDetailsComponent,
    VendorEditComponent,
    PhoneNumPipe,
    LocationAddItemsComponent
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
