import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from '../Components/page/page.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';

const routes: Routes = [
{ path : '' , redirectTo: 'Home' , pathMatch: 'full'}, 
{ path:'Home', component: PageComponent ,children:[
  {path:'Artists', component:ArtistlistComponent},
  {path:'**', redirectTo:'Artists'}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
