import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GatemanComponent } from './gateman/gateman.component';
import { SlotFormComponent } from './slot-form/slot-form.component';

const routes: Routes = [
  {path: 'admin' , component: AdminComponent},
  {path: 'gateman', component: GatemanComponent},
  {path: 'admin/slot-form' ,component: SlotFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
