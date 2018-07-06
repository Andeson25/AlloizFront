import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipePipe } from './pipe/date-pipe.pipe';
import { ImagePipePipe } from './pipe/image-pipe.pipe';
import { NouPipe } from './pipe/nou.pipe';
import { ReversePipe } from './pipe/reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatePipePipe, ImagePipePipe, NouPipe,NouPipe, ReversePipe, ReversePipe],
  exports:[DatePipePipe,ImagePipePipe,NouPipe, ReversePipe]
})
export class PipeModule { }
