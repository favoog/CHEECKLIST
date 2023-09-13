import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogDocentePage } from './log-docente.page';

const routes: Routes = [
  {
    path: '',
    component: LogDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogDocentePageRoutingModule {}
