import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RoutesComponent} from './routes/routes.component';
import {SetupComponent} from './setup/setup.component';

const routes: Routes = [
    {
      path: 'setup',
        component: SetupComponent
    },
    {
      path: 'router',
        component: RoutesComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
