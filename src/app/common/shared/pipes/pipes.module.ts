import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseLangPipe } from './parse-lang.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeResourseUrlPipe } from './safe-resource-url.pipe';

@NgModule({
  declarations: [ParseLangPipe, SafeHtmlPipe, SafeResourseUrlPipe],
  imports: [CommonModule],
  exports: [ParseLangPipe, SafeHtmlPipe, SafeResourseUrlPipe],
})
export class PipesModule {}
