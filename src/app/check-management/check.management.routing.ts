import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckManagementComponent} from './check-management.component'
import { CheckOverviewComponent } from './check-overview/check-overview.component'
import { CheckDetailComponent } from './check-detail/check-detail.component'

const routes: Routes = [
  {
    path: '',
    component: CheckManagementComponent,
    children: [
      {
        path: 'check-overview',
        component: CheckOverviewComponent
      },  {
        path: 'check-detail',
        component: CheckDetailComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckManagementRouting { }
