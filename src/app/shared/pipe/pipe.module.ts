import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipePipe } from './pipe/date-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatePipePipe],
  exports:[DatePipePipe]
})
export class PipeModule { }
