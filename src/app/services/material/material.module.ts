import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';

const Materials = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatInputModule
];

@NgModule({
  imports : [Materials],
  exports : [Materials],
})
export class MaterialModule { }
