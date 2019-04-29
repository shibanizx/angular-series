import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShowListComponent } from '../show/show-list/show-list.component';
import { AddShowComponent } from '../show/add-show/add-show.component';
import { EditShowComponent } from '../show/edit-show/edit-show.component';
import { ChartStatisticsComponent } from '../show/chart-statistics/chart-statistics.component';

const routes : Routes = [
  { path: '', redirectTo: '/showList', pathMatch: 'full'},
  { path: 'showList', component: ShowListComponent },
  { path: 'addShow', component: AddShowComponent },
  { path: 'editShow', component: EditShowComponent },
  { path: 'statistics', component: ChartStatisticsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
