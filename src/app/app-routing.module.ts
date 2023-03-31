import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudUsersComponent } from './crudUsers/crudUsers.component';
import { CrudAreasComponent } from './crudAreas/crudAreas.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users', component: CrudUsersComponent },
  { path: 'areas', component: CrudAreasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
