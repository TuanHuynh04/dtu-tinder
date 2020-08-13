import { RecsComponent } from './components/recs/recs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'recs',
  component: RecsComponent
},
{
  path: '**',
  redirectTo: 'recs',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
