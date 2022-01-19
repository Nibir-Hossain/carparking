import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';


import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { GatemanComponent } from './gateman/gateman.component';
import { SlotFormComponent } from './slot-form/slot-form.component';
import { SlotListComponent } from './slot-list/slot-list.component';
import { SlotEditComponent } from './slot-edit/slot-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    GatemanComponent,
    SlotFormComponent,
    SlotListComponent,
    SlotEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
