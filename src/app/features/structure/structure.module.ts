import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructureComponent } from './structure.component';

@NgModule({
  imports: [
    CommonModule,
    StructureRoutingModule
  ],
  declarations: [StructureComponent]
})
export class StructureModule { }
