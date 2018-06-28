import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MouseWheelDirective} from "./directive/MouseWheelDirective";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseWheelDirective],
  exports:[MouseWheelDirective]
})
export class DirectiveModule { }
