import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipePipe } from './pipe/date-pipe.pipe';
import { ImagePipePipe } from './pipe/image-pipe.pipe';
import { NouPipe } from './pipe/nou.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatePipePipe, ImagePipePipe, NouPipe,NouPipe],
  exports:[DatePipePipe,ImagePipePipe,NouPipe]
})
export class PipeModule { }
