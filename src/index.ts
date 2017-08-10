import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostcodeApiService } from './PostcodeApiService.service';
import { HttpModule, Http } from '@angular/http';

export { PostcodeApiService } from './PostcodeApiService.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
  ],
  exports: [],
  providers: [PostcodeApiService]
})
export class PostcodeApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PostcodeApiModule,
      providers: [PostcodeApiService]
    };
  }
}
