import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteLetterDirective } from './write-letter.directive';

@NgModule({
  declarations: [WriteLetterDirective],
  imports: [CommonModule],
  exports: [WriteLetterDirective],
})
export class DirectivesModule {}
