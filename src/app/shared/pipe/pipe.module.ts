import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipePipe } from './pipe/date-pipe.pipe';
import { ImagePipePipe } from './pipe/image-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatePipePipe, ImagePipePipe],
  exports:[DatePipePipe,ImagePipePipe]
})
export class PipeModule { }
