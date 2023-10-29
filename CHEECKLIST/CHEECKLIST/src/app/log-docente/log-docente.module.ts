import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogDocentePageRoutingModule } from './log-docente-routing.module';

import { LogDocentePage } from './log-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LogDocentePageRoutingModule
  ],
  declarations: [LogDocentePage]
})
export class LogDocentePageModule {}
